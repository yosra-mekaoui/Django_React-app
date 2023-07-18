import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Option (props){
   console.log(props.Option);
 
   
   

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'red' }}>nom: </span>{props.Option.nom}</Card.Title>
     <Card.Title><span style={{ color: 'red' }}>nb : </span>{props.Option.nombre_classes}</Card.Title>
     <Link to={"/update/" + props.Option.id}>
        <FaEdit className="edit-icon" />
      </Link>

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Option.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
