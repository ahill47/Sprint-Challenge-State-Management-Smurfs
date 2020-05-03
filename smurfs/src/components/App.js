import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

import { SmurfContext } from '../contexts/SmurfContext';
import './App.css';

function App() {
  const [smurfs, setSmurfs] = useState([]);

  const addSmurf = newSmurf => {
    // spread operator so old smurf wont be erased
    setSmurfs([...smurfs, newSmurf]);
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:3333/smurfs"
      )
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider value={{ addSmurf, smurfs }}>
      <div style={{border:"5px dotted blue", width:'50%', margin:'0 auto'}} className="App">
      <h1 style={{color:"blue", fontSize:"48px", fontFamily:"Gaegu", borderBottom:'5px dotted blue', paddingBottom:'5%'}}>Smurfville</h1>
        <SmurfsList/>
        <SmurfsForm/>
        
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
