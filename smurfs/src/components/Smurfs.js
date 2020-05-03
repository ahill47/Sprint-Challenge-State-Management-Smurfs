import React from 'react'
// Display the Smurf and button to delete smurf
const Smurfs =(props) => {
    console.log(props);
    
    return (

        <div className="smurfs">
        
            <h2 > Name: {props.smurf.name}</h2>
            <p> Age: {props.smurf.age} Height: {props.smurf.height}</p>
            
           
        </div>
    );
};

export default Smurfs
