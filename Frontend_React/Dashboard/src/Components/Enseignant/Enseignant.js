import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Enseignant (props){
   console.log(props.Enseignant);
 
   
   const handleEditClick = () => {
    props.handleEditClick(props.Enseignant); // Appel à la fonction handleEditClick du composant parent Options
  };

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
  
    <Card.Title><span style={{ color: 'gray' }}>email: </span>{props.Enseignant.email}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>username: </span>{props.Enseignant.username}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Enseignant.nom}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>prenom: </span>{props.Enseignant.prenom}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>grade: </span>{props.Enseignant.grade}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>roles: </span>{props.Enseignant.roles}</Card.Title>
    <Card.Title><span style={{ color: 'gray' }}>password: </span>{props.Enseignant.password}</Card.Title>

     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>
     

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Enseignant.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
