import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Module (props){
   console.log(props.Module);
 
   
   const handleEditClick = () => {
    props.handleEditClick(props.Module); // Appel à la fonction handleEditClick du composant parent Options
  };

   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Body>
   <Card.Title><span style={{ color: 'gray' }}>nom: </span>{props.Module.nom}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>description : </span>{props.Module.description}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>nombre_heures : </span>{props.Module.nombre_heures}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>competences : </span>{props.Module.competences}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>nombre_ects : </span>{props.Module.nombre_ects}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>fiche_module : </span>{props.Module.fiche_module}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>nombre_enseignants : </span>{props.Module.nombre_enseignants}</Card.Title>
     <Card.Title><span style={{ color: 'gray' }}>responsable_module : </span>{props.Module.responsable_module}</Card.Title>



     <span onClick={handleEditClick}>
            <FaEdit className="edit-icon" />
          </span>
     

      <FaTrash
        className="delete-icon"
        onClick={() => props.delete(props.Module.id)}
      />

   </Card.Body>

 </Card> 
</Col>
 
   ) 
   
}
