import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function EnseignantModal({
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
            {/* Ajoutez les champs de formulaire ici nom ,prenom , username, email,password, est_enseignant, grade */}
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
            <Form.Group controlId="formPrenom">
            <Form.Label>¨Prenom</Form.Label>
            <Form.Control
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Entrez le prenom"
            />
            </Form.Group>
            <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Entrez le username"
            />
            </Form.Group>
            <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez le email"
            />
            </Form.Group>
            <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez le password"
            />
            </Form.Group>
            <Form.Group controlId="formGrade">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Entrez le grade"
            />
            </Form.Group>
          
        <Form.Group controlId="formRole">
        <Form.Label>Role</Form.Label>
        <Form.Control
              type="text"
              name="roles"
              value={formData.roles}
              onChange={handleChange}
              placeholder="Entrez le role"
            />
        </Form.Group>
    


        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {modalTitle === 'Add Enseignant' ? 'Ajouter' : 'Mettre à jour'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
