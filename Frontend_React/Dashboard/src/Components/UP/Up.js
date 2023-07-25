import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Up (props){
   console.log(props.Up);
 
   
   const handleEditClick = () => {
    props.handleEditClick(props.Up); // Appel à la fonction handleEditClick du composant parent Options
  };

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Up.nom}</Card.Title>
     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>
     

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Up.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
