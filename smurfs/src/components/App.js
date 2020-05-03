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
      <div className="App">
      <h1>Smurfville</h1>
        <SmurfsList/>
        <SmurfsForm/>
        
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
