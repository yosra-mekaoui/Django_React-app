import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getRoles ,deleleRole,addRole,editRole} from "../../service/api"
import Role from "./Role";
import RoleModal from './RoleModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Roles (){
    const [roles,setRoles] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [formData, setFormData] = useState({ nom: '', description:'', nombre_classes: 0 });
    const [selectedRole, setSelectedRole] = useState(null);
  
    const nomChoices = [
        ['ADMINISTRATEUR', 'ADMINISTRATEUR'],
        ['COORDINATEUR_UNITE_PEDAGOGIQUE', 'COORDINATEUR_UNITE_PEDAGOGIQUE'],
        ['ENSEIGNANT', 'ENSEIGNANT'],
        ['COORDINATEUR_DES_PROJETS', 'COORDINATEUR_DES_PROJETS'],
        ['RESPONSABLE_OPTION', 'RESPONSABLE_OPTION'],
        ['RESPONSABLE_MODULE', 'RESPONSABLE_MODULE'],
 
    ];
    
     const fetchRoles= () => async () => {
        console.log('test fetchs') 
        getRoles()
        .then((response)=>{ console.log(response.data) 
            setRoles(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchRoles(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleRole(id)
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
        setModalTitle('Add Role');
        setFormData({ nom: '',description:'' ,charge_horaire: 0 });
        setShowModal(true);
      };
    
      const handleEditClick = (role) => {
        console.log('Editing role:', role);

        // Logique pour ouvrir le modal d'édition et pré-remplir les données
        setModalTitle('Edit Role');
        setSelectedRole(role);
        setFormData({
          nom: role.nom,
          description:role.description,
          charge_horaire: role.charge_horaire,
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
          if (modalTitle === 'Add Role') {
            const formDataWithIntClasses = {
              ...formData,
              charge_horaire: parseInt(formData.charge_horaire, 10),
            };
            await addRole(formDataWithIntClasses);
          } else if (modalTitle === 'Edit Role') {
            const formDataWithIntClasses = {
              ...formData,
              nombre_classes: parseInt(formData.charge_horaire, 10),
            };
            await editRole(selectedRole.id, formDataWithIntClasses);
          }
    
          console.log('Form data submitted:', formData);
          setShowModal(false);
          setShouldRefetch(!shouldRefetch); 
        } catch (error) {
          console.log('Error submitting form:', error);
        }
      };
   
   return   (<> 
   <Container fluid="md">
      <h3>Liste des roles:</h3>
      <button type="button" class="btn btn-outline-dark"onClick={handleOpenModal}>Ajouter un role</button>

      </Container>
  
   <Container fluid="md">
    
   <Row>
   {roles.length != 0 ? roles.map(e=> { return    <Role key={e.id} Role={e} delete={deleteB} handleEditClick={handleEditClick}/> } ) : <Col><Alert variant="danger"> No Roles found</Alert> </Col> }
   </Row>
    </Container>
   
  

      <RoleModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        nomChoices={nomChoices} 

      />
   </>)
}