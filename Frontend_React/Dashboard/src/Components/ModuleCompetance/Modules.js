import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getModules, deleleModule, addModule, editModule } from "../../service/api";
import Module from "./Module";
import ModuleModal from './ModuleModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Modules() {
  const [modules, setModules] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [formData, setFormData] = useState({
    nom: '', description: '', nombre_heures: 0, competences: '',
    nombre_ects: 0, fiche_module: null, nombre_enseignants: '', responsable_module: ''
  });
  const [selectedModule, setSelectedModule] = useState(null);

  const fetchModules = () => async () => {
    console.log('test fetchs');
    getModules()
      .then((response) => {
        console.log(response.data);
        setModules(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => fetchModules(), [shouldRefetch]);

  const deleteB = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleleModule(id)
        .then(async () => {
          console.log('succcessfully deleted');
          setShouldRefetch(!shouldRefetch);
        })
        .catch((error) => {
          console.log('error deleting', error);
        });
    }
  };

  const handleOpenModal = () => {
    setModalTitle('Add Module');
    setFormData({
      nom: '', description: '', nombre_heures: 0, competences: '',
      nombre_ects: 0, fiche_module: null, nombre_enseignants: '', responsable_module: ''
    });
    setShowModal(true);
  };

  const handleEditClick = (module) => {
    console.log('Editing module:', module);

    setModalTitle('Edit Module');
    setSelectedModule(module);
    setFormData({
      nom: module.nom, description: module.description, nombre_heures: module.nombre_heures,
      competences: module.competences, nombre_ects: module.nombre_ects, fiche_module: null,
      nombre_enseignants: module.nombre_enseignants, responsable_module: module.responsable_module
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "fiche_module") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [e.target.name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (modalTitle === 'Add Module') {
        const formDataWithIntClasses = {
          ...formData,
          nombre_heures: parseInt(formData.nombre_heures, 10),
          nombre_ects: parseInt(formData.nombre_ects, 10),
        };
        await addModule(formDataWithIntClasses);
      } else if (modalTitle === 'Edit Module') {
        const formDataWithIntClasses = {
          ...formData,
          nombre_heures: parseInt(formData.nombre_heures, 10),
          nombre_ects: parseInt(formData.nombre_ects, 10),
        };
        await editModule(selectedModule.id, formDataWithIntClasses);
      }

      console.log('Form data submitted:', formData);
      setShowModal(false);
      setShouldRefetch(!shouldRefetch);
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  return (
    <>
      <Container fluid="md">
        <h3>Liste des modules:</h3>
        <button type="button" class="btn btn-outline-dark" onClick={handleOpenModal}>Ajouter un module</button>
      </Container>

      <Container fluid="md">
        <Row>
          {modules.length !== 0 ? modules.map(e => (
            <Module key={e.id} Module={e} delete={deleteB} handleEditClick={handleEditClick} />
          )) : <Col><Alert variant="danger">No Modules found</Alert></Col>}
        </Row>
      </Container>

      <ModuleModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
