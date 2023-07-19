import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Option (props){
   console.log(props.Option);
 
   const handleEditClick = () => {
    props.handleEditClick(props.Option); // Appel à la fonction handleEditClick du composant parent Options
  };
   

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'red' }}>nom: </span>{props.Option.nom}</Card.Title>
     <Card.Title><span style={{ color: 'red' }}>nb : </span>{props.Option.nombre_classes}</Card.Title>
     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Option.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
