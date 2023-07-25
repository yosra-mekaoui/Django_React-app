import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { getEnseignants, deleleEnseignant, addEnseignant, editEnseignant } from "../../service/api";
import Enseignant from "./Enseignant";
import EnseignantModal from "./EnseignantModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Enseignants() {
  const [enseignants, setEnseignants] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formData, setFormData] = useState({
  
    
    email: "",
    username:"",
    nom: "",
    prenom: "",
    password: "",
    roles: [],
    grade: "",
  });

   const [selectedEnseignant, setSelectedEnseignant] = useState(null);

  const fetchEnseignants = () => {
    console.log("test fetchs");
    getEnseignants()
      .then((response) => {
        console.log(response.data);
        setEnseignants(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEnseignants();
  }, [shouldRefetch]);

  const deleteB = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleleEnseignant(id)
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
    setModalTitle("Add Enseignant");
    setFormData({  email: "",
    username:"",
    nom: "",
    prenom: "",
    password: "",
    roles: [],
    grade: "",
    // est_enseignant: false,
 });
    setShowModal(true);
  };

  const handleEditClick = (enseignant) => {
    console.log("Editing Enseignant:", enseignant);

    // Logique pour ouvrir le modal d'édition et pré-remplir les données
    setModalTitle("Edit enseignant");
    setSelectedEnseignant(enseignant);
    setFormData({
      
        email: enseignant.email,
        username:enseignant.username,
        nom: enseignant.nom,
        prenom: enseignant.prenom,
        password: enseignant.password,
        roles: enseignant.roles,
        grade: enseignant.grade,
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
      if (modalTitle === "Add Enseignant") {
        const formDataWithIntClasses = {
          ...formData,
        };
        await addEnseignant(formDataWithIntClasses);
      } else if (modalTitle === "Edit Enseignant") {
        const formDataWithIntClasses = {
          ...formData,
        };
        await editEnseignant(selectedEnseignant.id, formDataWithIntClasses);
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
      <h3 className="mt-4">Liste des Enseignants:</h3>
      <button type="button" className="btn btn-outline-dark mt-2 mb-4" onClick={handleOpenModal}>
        Ajouter une enseignant
      </button>
    </Container>

    <Container fluid="md">
      <Row>
        {enseignants.length !== 0 ? (
          enseignants.map((e) => (
            <Col key={e.id} xs={12} sm={6} md={4} lg={3}>
              <Enseignant Enseignant={e} delete={deleteB} handleEditClick={handleEditClick} />
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="danger">No Enseignants found</Alert>{" "}
          </Col>
        )}
        </Row>
      </Container>
      {/* Modal pour les options */}
      <EnseignantModal
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
