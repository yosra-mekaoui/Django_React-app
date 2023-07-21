import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Classe (props){
   console.log(props.Classe);
 
   
   const handleEditClick = () => {
    props.handleEditClick(props.Classe); // Appel à la fonction handleEditClick du composant parent Options
  };

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Classe.nom}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>niveau : </span>{props.Classe.niveau}</Card.Title>
     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>
     

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Classe.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
