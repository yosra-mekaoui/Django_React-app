import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function UpModal({
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
        <Form>
          {/* Ajoutez les champs de formulaire ici */}
          {/* Par exemple : */}
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez le nom"
            />
            </Form.Group>
         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
        {modalTitle === 'Add Up' ? 'Ajouter' : 'Mettre à jour'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
