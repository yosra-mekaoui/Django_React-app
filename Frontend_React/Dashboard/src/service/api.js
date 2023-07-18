import axios from 'axios';
const url = "http://127.0.0.1:8000/api";
export const getOptions = async (id) => {
    id = id || '';
    return await axios.get(`http://127.0.0.1:8000/api/options/${id}`);
}

export const addOption = async (option) => {
    console.log(option);  
    return await axios.post(url+"/add/",option,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const editOption = async (id, option) => {
    console.log(`${url}/update/${id}`);
    return await axios.put(`${url}/update/${id}`,option,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
}
export const deleleOption = async (id) => {
    return await axios.delete(`${url}/delete/${id}`);
}

//classe
export const getClasses = async (id) => {
    id = id || '';
    return await axios.get(`http://127.0.0.1:8000/api/classes/${id}`);
}

export const addClasse = async (classe) => {
    console.log(classe);  
    return await axios.post(url+"/add/",classe,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const editClasse = async (id, classe) => {
    console.log(`${url}/update/${id}`);
    return await axios.put(`${url}/update/${id}`,classe,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
}
export const deleleClasse = async (id) => {
    return await axios.delete(`${url}/delete/${id}`);
}