import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function RoleModal({
  showModal,
  onHide,
  modalTitle,
  formData,
  handleChange,
  handleSubmit,
  nomChoices, 

})
 {
    console.log(nomChoices);
    const ListOfnames = ['administrateur', 'coordinateur_unité_pédagogique','enseignant','Coordinateu_des_projets','responsable_option','responsable_module']
       
    
    
    
  
  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              as="select"
              name="nom"
              value={formData.nom}
              onChange={handleChange}>
             {ListOfnames.map((choice,key) => (
  <option key={key} value={choice}>
    {choice}
  </option>
))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Entrez une description"
            />
            </Form.Group>
          <Form.Group controlId="formCharge_horaire">
            <Form.Label>charge_horaire</Form.Label>
            <Form.Control
              type="number"
              name="charge_horaire"
              value={formData.charge_horaire}
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
          {modalTitle === 'Add Role' ? 'Ajouter' : 'Mettre à jour'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
