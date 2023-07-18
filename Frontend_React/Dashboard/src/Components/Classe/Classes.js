import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { getClasses ,deleleClasse} from "../../service/api"
import Classe from "./Classe";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Classes (){
    const [classes,setClasses] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
     const fetchClasses= () => async () => {
        console.log('test fetchs') 
        getClasses()
        .then((response)=>{ console.log(response.data) 
            setClasses(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchClasses(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleClasse(id)
          .then( async ()=>{
           console.log('succcessfully deleted')
           setShouldRefetch(!shouldRefetch)
          })
          .catch((error)=>{
            console.log('error deleting', error)
          })
        }
      };
   
   
   
   return   (<> 
   <Container fluid="md">
   <Row>
   {classes.length != 0 ? classes.map(e=> { return    <Classe key={e.id} Classe={e} delete={deleteB} /> } ) : <Col><Alert variant="danger"> No Classes found</Alert> </Col> }
   </Row>
    </Container>
   
  
   </>)
}