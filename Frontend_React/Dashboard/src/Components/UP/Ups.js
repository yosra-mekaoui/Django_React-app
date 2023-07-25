import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getUps ,deleleUp,editUp,addUp} from "../../service/api"
import Up from "./Up";
import UpModal from './UpModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Ups (){
    const [ups,setUps] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [formData, setFormData] = useState({ nom: ''});
    const [selectedUp, setSelectedUp] = useState(null);
   
     const fetchUps= () => async () => {
        console.log('test fetchs') 
        getUps()
        .then((response)=>{ console.log(response.data) 
            setUps(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchUps(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleUp(id)
          .then( async ()=>{
           console.log('succcessfully deleted')
           setShouldRefetch(!shouldRefetch)
          })
          .catch((error)=>{
            console.log('error deleting', error)
          })
        }
      };
      const handleOpenModal = () => {
        setModalTitle('Add Up');
        setFormData({ nom: ''});
        setShowModal(true);
      };
    
      const handleEditClick = (up) => {
        console.log('Editing up:', up);

        // Logique pour ouvrir le modal d'édition et pré-remplir les données
        setModalTitle('Edit Up');
        setSelectedUp(up);
        setFormData({
          nom: up.nom,
        });
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = async () => {
        try {
          if (modalTitle === 'Add Up') {
            const formDataWithIntClasses = {
              ...formData,
            };
            await addUp(formDataWithIntClasses);
          } else if (modalTitle === 'Edit Up') {
            const formDataWithIntClasses = {
              ...formData,
            };
            await editUp(selectedUp.id, formDataWithIntClasses);
          }
    
          console.log('Form data submitted:', formData);
          setShowModal(false);
          setShouldRefetch(!shouldRefetch); // Rechargez les options pour refléter les modifications
        } catch (error) {
          console.log('Error submitting form:', error);
        }
      };
   
   return   (<> 
   <Container fluid="md">
      <h3>Liste des ups:</h3>
      <button type="button" class="btn btn-outline-dark"onClick={handleOpenModal}>Ajouter une up</button>

      </Container>
  
   <Container fluid="md">
    
   <Row>
   {ups.length != 0 ? ups.map(e=> { return    <Up key={e.id} Up={e} delete={deleteB} handleEditClick={handleEditClick}/> } ) : <Col><Alert variant="danger"> No Ups found</Alert> </Col> }
   </Row>
    </Container>
   
  

      {/* Modal pour les options */}
      <UpModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

      />
   </>)
}