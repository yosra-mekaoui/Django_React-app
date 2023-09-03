import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function ClasseModal({
  showModal,
  onHide,
  modalTitle,
  formData,
  handleChange,
  handleSubmit,
  niveauChoices, // Recevoir la liste des choix de niveau depuis le parent
}) {
  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Ajoutez les champs de formulaire ici */}
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
          <Form.Group controlId="formNiveau">
            <Form.Label>Niveau</Form.Label>
            <Form.Control
              type="text"
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              placeholder="Entrez l'id de niveau"
            />
          </Form.Group>
          
          {/* <Form.Group controlId="formNiveau">
            <Form.Label>Niveau</Form.Label>
            <Form.Control as="select" name="niveau" value={formData.niveau} onChange={handleChange}>
              <option value="">Choisissez un niveau</option>
              {niveauChoices.map((choice) => (
                <option key={choice[0]} value={choice[0]}>
                {choice[1]}
              </option>
            ))}
            </Form.Control>
          </Form.Group> */}
          

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {modalTitle === 'Add Classe' ? 'Ajouter' : 'Mettre à jour'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
