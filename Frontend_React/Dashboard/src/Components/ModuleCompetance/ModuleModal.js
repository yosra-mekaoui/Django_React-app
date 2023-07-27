import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ModuleModal({
  showModal,
  onHide,
  modalTitle,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form enctype="multipart/form-data">
          <Form.Group controlId="formModuleName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleHeures">
            <Form.Label>Nombre d'heures</Form.Label>
            <Form.Control
              type="number"
              name="nombre_heures"
              value={formData.nombre_heures}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleCompetences">
            <Form.Label>Compétences</Form.Label>
            <Form.Control
              as="textarea"
              name="competences"
              value={formData.competences}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleEcts">
            <Form.Label>Nombre ECTS</Form.Label>
            <Form.Control
              type="number"
              name="nombre_ects"
              value={formData.nombre_ects}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleFiche">
            <Form.Label>Fiche Module</Form.Label>
            <Form.Control
              type="file"
              name="fiche_module"
              id="fileInput" // Ajoutez un identifiant unique pour le champ de fichie
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleEnseignants">
            <Form.Label>Nombre d'enseignants</Form.Label>
            <Form.Control
              type="number"
              name="nombre_enseignants"
              value={formData.nombre_enseignants}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModuleResponsable">
            <Form.Label>Responsable du module</Form.Label>
            <Form.Control
              type="text"
              name="responsable_module"
              value={formData.responsable_module}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
