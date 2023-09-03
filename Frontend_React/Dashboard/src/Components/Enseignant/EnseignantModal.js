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
  roles,
  selectARole,
  removeSelectedRoles
}) {
  console.log(roles)
 
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
    as="select"
    name="role"
    onChange={selectARole}  // Change to the appropriate name that corresponds to your form data
  >
    <option value="">Select a role</option>  // Default option
    {roles.map((role, index) => (
      <option key={index} value={role.id}>
        {role.nom}
      </option>
    ))}
  </Form.Control>
        
        </Form.Group>
        <Form.Group >
        <Form.Label>Selected Roles</Form.Label>
        </Form.Group>
        {formData.roles.map((roleID) => (
    <Form.Group >
    <Form.Label key={roleID}>{roles.find((r) => r.id === Number(roleID)).nom}
   

</Form.Label> 
<Button variant="outline-danger ms-2 " size='xs' onClick={()=>removeSelectedRoles(roleID)}>Delete </Button>{' '}
    </Form.Group>

))}


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
