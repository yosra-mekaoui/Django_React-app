import React, { useEffect, useState } from "react";
import { getEnseignants, getModules,editEnseignantChargeHoraire } from "../../service/api";

export default function Affectation() {
  const [ListeDesModules, setListeDesModules] = useState([]);
  const [ListeDesEn, setListeDesEn] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null); // State to store the selected module
  const [selectedEnseignant, setSelectedEnseignant] = useState(null); // State to store the selected enseignant
  const user=localStorage.getItem('user');

  useEffect(() => {
    if(user==null){
        window.location.href='/signin';
      }
    getModules().then((result) => {setListeDesModules(result.data)
    console.log(result.data)});
  }, []);


  // Event handler for selecting a module
  const handleModuleChange = (event) => {

    setSelectedModule(event.target.value);
    const moduleSelected=ListeDesModules.find((e)=>e.id===Number(event.target.value));
// Assuming getEnseignants() returns a Promise
getEnseignants()
  .then((result) => {
    console.log(event)
    const filteredEnseignants = result.data.filter((e) => e.charge_horaire >moduleSelected.nombre_heures);
    setListeDesEn(filteredEnseignants);
  })
  .catch((error) => {
    console.error("Error fetching enseignants:", error);
    // Handle the error appropriately, e.g., show an error message to the user
  });

  };

  // Event handler for selecting an enseignant
  const handleEnseignantChange = (event) => {
    setSelectedEnseignant(event.target.value);
  };
  async function submit(e) {
    e.preventDefault();
    const moduleSelected=ListeDesModules.find((e)=>e.id===Number(selectedModule));
    const en=ListeDesEn.find((e)=>e.id===Number(selectedEnseignant));
    const  charge_horaire=en.charge_horaire-moduleSelected.nombre_heures

     editEnseignantChargeHoraire(selectedEnseignant,charge_horaire).then((result)=>alert(
        `${en.nom} est affectée  ${moduleSelected.nom}`))
  }

  return (
        
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      {user?(
        <div class="container-fluid py-4">
    <div className="row mt-4">
      <div className="col-12"></div>
    <div className="card">
        <div className="card-body">
      <h2>Affectation Form</h2>
      <form>
        <div>
          <label htmlFor="module">Select Module:</label>
          <select
            id="module"
            className="form-control"

            name="module"
            value={selectedModule}
            onChange={handleModuleChange}
          >
            <option value="">Select a module</option>
            {ListeDesModules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.nom} - charge horaire : {module.nombre_heures}
              </option>
            ))}
          </select>
        </div>
        {ListeDesEn&&
        <div>
          <label htmlFor="enseignant">Select Enseignant:</label>
          <select
          className="form-control"
            id="enseignant"
            name="enseignant"
            value={selectedEnseignant}
            onChange={handleEnseignantChange}
          >
            <option value="">Select an enseignant</option>
            {ListeDesEn.filter((e)=>e.nom!="").map((enseignant) => (
              <option key={enseignant.id} value={enseignant.id}>
                {enseignant.nom} - horaire dispo : {enseignant.charge_horaire}
              </option>
            ))}
          </select>
        </div>}
        <button type="submit" className="mt-3 btn btn-primary" onClick={submit}>Submit</button>
      </form>
    </div>
    </div>
    </div>
    </div>):(<></>)}</main>
  );
}



