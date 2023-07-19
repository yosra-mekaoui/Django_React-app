import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function OptionModal({
  showModal,
  onHide,
  modalTitle,
  formData,
  handleChange,
  handleSubmit,
  nomChoices, // Recevoir la liste des choix de nom depuis le parent

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
              as="select"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            >
              <option value="">Choisissez une option</option>
              {nomChoices.map((choice) => (
                <option key={choice[0]} value={choice[0]}>
                  {choice[1]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formNombreClasses">
            <Form.Label>Nombre de classes</Form.Label>
            <Form.Control
              type="number"
              name="nombre_classes"
              value={formData.nombre_classes}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {modalTitle === 'Add Option' ? 'Ajouter' : 'Mettre à jour'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
