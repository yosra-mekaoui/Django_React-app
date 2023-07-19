import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getOptions ,deleleOption,addOption,editOption} from "../../service/api"
import Option from "./Option";
import OptionModal from './OptionModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Options (){
    const [options,setOptions] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [formData, setFormData] = useState({ nom: '', nombre_classes: 0 });
    const [selectedOption, setSelectedOption] = useState(null);
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
     const fetchOptions= () => async () => {
        console.log('test fetchs') 
        getOptions()
        .then((response)=>{ console.log(response.data) 
            setOptions(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchOptions(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleOption(id)
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
        setModalTitle('Add Option');
        setFormData({ nom: '', nombre_classes: 0 });
        setShowModal(true);
      };
    
      const handleEditClick = (option) => {
        console.log('Editing option:', option);

        // Logique pour ouvrir le modal d'édition et pré-remplir les données
        setModalTitle('Edit Option');
        setSelectedOption(option);
        setFormData({
          nom: option.nom,
          nombre_classes: option.nombre_classes,
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
          if (modalTitle === 'Add Option') {
            const formDataWithIntClasses = {
              ...formData,
              nombre_classes: parseInt(formData.nombre_classes, 10),
            };
            await addOption(formDataWithIntClasses);
          } else if (modalTitle === 'Edit Option') {
            const formDataWithIntClasses = {
              ...formData,
              nombre_classes: parseInt(formData.nombre_classes, 10),
            };
            await editOption(selectedOption.id, formDataWithIntClasses);
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
   <Row>
   {options.length != 0 ? options.map(e=> { return    <Option key={e.id} Option={e} delete={deleteB} handleEditClick={handleEditClick}/> } ) : <Col><Alert variant="danger"> No Options found</Alert> </Col> }
   </Row>
    </Container>
   
   {/* Bouton pour ajouter une option */}
   <div className="d-flex justify-content-end mt-3">
      <Button variant="primary" onClick={handleOpenModal}>
        Ajouter une option
      </Button>
    </div>

      {/* Modal pour les options */}
      <OptionModal
        showModal={showModal}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        nomChoices={nomChoices} // Passez la liste des choix de nom au composant OptionModal

      />
   </>)
}