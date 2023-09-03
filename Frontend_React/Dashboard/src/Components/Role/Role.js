import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Role (props){
   console.log(props.Role);
 
   const handleEditClick = () => {
    props.handleEditClick(props.Role); // Appel à la fonction handleEditClick du composant parent Options
  };
   

   return (  
    
   <Col> 
   
   <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Role.nom}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>disc : </span>{props.Role.description}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>nb : </span>{props.Role.charge_horaire}</Card.Title>

     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Role.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
