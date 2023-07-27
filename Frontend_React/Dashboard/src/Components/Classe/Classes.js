import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { getClasses, deleleClasse, addClasse, editClasse } from "../../service/api";
import Classe from "./Classe";
import ClasseModal from "./ClasseModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    niveau: "",
  });

   const [selectedClasse, setSelectedClasse] = useState(null);


  // const niveauChoices = [
  //   ['1A', 1],
  //   ['2A', 2],
  //   ['3A', 3],
  //   ['3B', 4],
  //   ['4ème', 5],
  //   ['5ème', 6],

  // ];

  const fetchClasses = () => {
    console.log("test fetchs");
    getClasses()
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchClasses();
  }, [shouldRefetch]);

  const deleteB = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleleClasse(id)
        .then(async () => {
          console.log("successfully deleted");
          setShouldRefetch(!shouldRefetch);
        })
        .catch((error) => {
          console.log("error deleting", error);
        });
    }
  };

  const handleOpenModal = () => {
    setModalTitle("Add Classe");
    setFormData({ nom: "", niveau: "" });
    setShowModal(true);
  };

  const handleEditClick = (classe) => {
    console.log("Editing classe:", classe);

    // Logique pour ouvrir le modal d'édition et pré-remplir les données
    setModalTitle("Edit Classe");
    setSelectedClasse(classe);
    setFormData({
      nom: classe.nom,
      niveau: classe.niveau,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (modalTitle === "Add Classe") {
        const formDataWithIntClasses = {
          ...formData,
        };
        await addClasse(formDataWithIntClasses);
      } else if (modalTitle === "Edit Classe") {
        const formDataWithIntClasses = {
          ...formData,
        };
        await editClasse(selectedClasse.id, formDataWithIntClasses);
      }

      console.log("Form data submitted:", formData);
      setShowModal(false);
      setShouldRefetch(!shouldRefetch);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <>
    <Container fluid="md">
      <h3 className="mt-4">Liste des classes:</h3>
      <button type="button" className="btn btn-outline-dark mt-2 mb-4" onClick={handleOpenModal}>
        Ajouter une classe
      </button>
    </Container>

    <Container fluid="md">
      <Row>
        {classes.length !== 0 ? (
          classes.map((e) => (
            <Col key={e.id} xs={12} sm={6} md={4} lg={3}>
              <Classe Classe={e} delete={deleteB} handleEditClick={handleEditClick} />
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="danger">No Classes found</Alert>{" "}
          </Col>
        )}
        </Row>
      </Container>
      {/* Modal pour les options */}
      <ClasseModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        // niveauChoices={niveauChoices}
      />
    </>
  );
}
