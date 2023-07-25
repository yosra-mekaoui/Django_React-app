import axios from 'axios';
const addUrl = "http://127.0.0.1:8000/api/options";
const addUrlC = "http://127.0.0.1:8000/api/classes";
const addUrlUp = "http://127.0.0.1:8000/api/ups";
const addUrlN = "http://127.0.0.1:8000/api/niveaux";
const apiUrl = 'http://127.0.0.1:8000/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/register/`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/login/`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const logoutUser = async () => {
  try {
    await axios.post(`${apiUrl}logout/`);
  } catch (error) {
    throw error;
  }
};
export const getUser = async () => {
  try {
    const response = await axios.get(`${apiUrl}user/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOptions = async (id) => {
    id = id || '';
    return await axios.get(`http://127.0.0.1:8000/api/options/${id}`);
}
export const addOption = async (option) => {
    console.log(option);  
    return await axios.post(addUrl+"/add/",option,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const editOption = async (id, option) => {
    console.log(`${addUrl}/update/${id}`);
    return await axios.put(`${addUrl}/update/${id}`, option, {
      headers: {
          'Content-Type': 'multipart/form-data',
        }});
}
export const deleleOption = async (id) => {
    return await axios.delete(`http://127.0.0.1:8000/api/options/delete/${id}`);
}
//classe
export const getClasses = async (id) => {
    id = id || '';
    return await axios.get(`http://127.0.0.1:8000/api/classes/${id}`);
}
export const addClasse = async (classe) => {
    console.log(classe);  
    return await axios.post(addUrlC+"/add/",classe,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const editClasse = async (id, classe) => {
    console.log(`${addUrlC}/update/${id}`);
    return await axios.put(`${addUrlC}/update/${id}`,classe,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
}
export const deleleClasse = async (id) => {
    return await axios.delete(`http://127.0.0.1:8000/api/classes/delete/${id}`);
}
//login http://127.0.0.1:8000/api/login
export const login = async (user) => {
    console.log(user);  
    return await axios.post(`http://127.0.0.1:8000/api/login`
    ,user,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
//User
export const getEnseignants = async (id) => {
    id = id || '';
    return await axios.get(`http://127.0.0.1:8000/api/${id}`);
}

export const addEnseignant = async (enseignant) => {
  console.log(enseignant);  
  return await axios.post(apiUrl+"/add/",enseignant,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}
export const editEnseignant = async (id, enseignant) => {
  console.log(`${apiUrl}/update/${id}`);
  return await axios.put(`${apiUrl}/update/${id}`,enseignant,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }});
}
export const deleleEnseignant = async (id) => {
    return await axios.delete(`http://localhost:8000/api/delete/${id}`);}


//up
export const getUps = async (id) => {
  id = id || '';
  return await axios.get(`http://127.0.0.1:8000/api/ups/${id}`);
}
export const addUp = async (up) => {
  console.log(up);  
  return await axios.post(addUrlUp+"/add/",up,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}
export const editUp = async (id, up) => {
  console.log(`${addUrlUp}/update/${id}`);
  return await axios.put(`${addUrlUp}/update/${id}`,up,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }});
}
export const deleleUp = async (id) => {
  return await axios.delete(`http://127.0.0.1:8000/api/up/delete/${id}`);
}
//NIVEAU
export const getNiveaux = async (id) => {
  id = id || '';
  return await axios.get(`http://127.0.0.1:8000/api/niveaux/${id}`);
}
export const addNiveau = async (niveau) => {
  console.log(niveau);  
  return await axios.post(addUrlN+"/add/",niveau,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}
export const editNiveau = async (id, niveau) => {
  console.log(`${addUrlN}/update/${id}`);
  return await axios.put(`${addUrlN}/update/${id}`, niveau, {
    headers: {
        'Content-Type': 'multipart/form-data',
      }});
}
export const deleleNiveau = async (id) => {
  return await axios.delete(`http://127.0.0.1:8000/api/niveaux/delete/${id}`);
}