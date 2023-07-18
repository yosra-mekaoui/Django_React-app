import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Classe (props){
   console.log(props.Classe);
 
   
   

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'red' }}>nom: </span>{props.Classe.nom}</Card.Title>
     <Card.Title><span style={{ color: 'red' }}>niveau : </span>{props.Classe.niveau}</Card.Title>
     <Card.Title><span style={{ color: 'red' }}>option : </span>{props.Classe.options}</Card.Title>

     <Link to={"/update/" + props.Classe.id}>
        <FaEdit className="edit-icon" />
      </Link>

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Classe.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
