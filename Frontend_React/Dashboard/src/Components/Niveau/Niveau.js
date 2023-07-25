import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Niveau (props){
   console.log(props.Niveau);
 
   const handleEditClick = () => {
    props.handleEditClick(props.Niveau); // Appel à la fonction handleEditClick du composant parent Niveaus
  };
   

   return (  
    
   <Col> 
   
   <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Niveau.nom}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>nb : </span>{props.Niveau.nombre_classes}</Card.Title>
     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Niveau.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
