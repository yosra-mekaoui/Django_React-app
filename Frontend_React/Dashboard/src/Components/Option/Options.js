import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { getOptions ,deleleOption} from "../../service/api"
import Option from "./Option";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Options (){
    const [options,setOptions] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
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
   
   
   
   return   (<> 
   <Container fluid="md">
   <Row>
   {options.length != 0 ? options.map(e=> { return    <Option key={e.id} Option={e} delete={deleteB} /> } ) : <Col><Alert variant="danger"> No Options found</Alert> </Col> }
   </Row>
    </Container>
   
  
   </>)
}