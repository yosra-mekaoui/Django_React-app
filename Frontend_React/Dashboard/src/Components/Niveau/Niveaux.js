import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getNiveaux ,deleleNiveau,addNiveau,editNiveau, addClasse} from "../../service/api"
import Niveau from "./Niveau";
import NiveauModal from './NiveauModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Niveaux (){
    const [niveaux,setNiveaux] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [formData, setFormData] = useState({ nom: '', nombre_classes: 0 });
    const [selectedNiveau, setSelectedNiveau] = useState(null);
    const nomChoices = [
      ['TWIN', 'TWIN'],
      ['SE', 'SE'],
      ['SAE', 'SAE'],
      ['CLOUD', 'CLOUD'],
      ['DS', 'DS'],
      ['WIN', 'WIN'],
      ['SIM', 'SIM'],
      ['SLIM', 'SLIM'],
      ['GAMIX', 'GAMIX'],
      ['INFINI', 'INFINI'],
 
    ];
     const fetchNiveaux= () => async () => {
        console.log('test fetchs') 
        getNiveaux()
        .then((response)=>{ console.log(response.data) 
            setNiveaux(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchNiveaux(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleNiveau(id)
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
        setModalTitle('Add Niveau');
        setFormData({ nom: '', nombre_classes: 0 });
        setShowModal(true);
      };
    
      const handleEditClick = (niveau) => {
        console.log('Editing niveau:', niveau);

        // Logique pour ouvrir le modal d'édition et pré-remplir les données
        setModalTitle('Edit Niveau');
        setSelectedNiveau(niveau);
        setFormData({
          nom: niveau.nom,
          nombre_classes: niveau.nombre_classes,
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
          if (modalTitle === 'Add Niveau') {
            const formDataWithIntClasses = {
              ...formData,
              nombre_classes: parseInt(formData.nombre_classes, 10),
            };
            const n=await addNiveau(formDataWithIntClasses);
            const niveauId=n.data.id

            
            const nombreDeClasse=parseInt(formData.nombre_classes, 10)
            for(let i=1; i<=nombreDeClasse;i++){
              await addClasse(
                { nom: `${formData.nom}${i}`, niveau:niveauId  }
              )
            }
          } else if (modalTitle === 'Edit Niveau') {
            const formDataWithIntClasses = {
              ...formData,
              nombre_classes: parseInt(formData.nombre_classes, 10),
            };
            await editNiveau(selectedNiveau.id, formDataWithIntClasses);
          }
    
          console.log('Form data submitted:', formData);
          setShowModal(false);
          setShouldRefetch(!shouldRefetch); // Rechargez les Niveaus pour refléter les modifications
        } catch (error) {
          console.log('Error submitting form:', error);
        }
      };
   
   return   (<> 
   <Container fluid="md">
      <h3>Liste des Niveaux:</h3>
      <button type="button" class="btn btn-outline-dark"onClick={handleOpenModal}>Ajouter une Niveau</button>

      </Container>
  
   <Container fluid="md">
    
   <Row>
   {niveaux.length != 0 ? niveaux.map(e=> { return    <Niveau key={e.id} Niveau={e} delete={deleteB} handleEditClick={handleEditClick}/> } ) : <Col><Alert variant="danger"> No Options found</Alert> </Col> }
   </Row>
    </Container>
   
  

      {/* Modal pour les options */}
      <NiveauModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

      />
   </>)
}