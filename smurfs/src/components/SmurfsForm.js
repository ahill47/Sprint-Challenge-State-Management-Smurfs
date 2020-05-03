import React, {useState, useContext} from 'react'
import {SmurfContext} from '../contexts/SmurfContext'

// set state to empty strings for user to fill out


function SmurfsForm() {
    const [newSmurf, setNewSmurf]=useState({
        name:'',
        age:'',
        height:''
    });
    // consuming the data
    const {addSmurf}= useContext(SmurfContext);

    //Handling Changes and Input
    const handleChange=(e)=>{
        
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();// know I know why I need this 
        addSmurf(newSmurf)
    }
    // Button styling
    const Buttons={
        marginBottom:'5%',
        color:"blue",
        background:'yellow',
        fontWeight:'bold',
        borderRadius: '8px',
        fontSize:'16px',
        padding: '14px 40px'
    }
    return (
        <div style={{color:'blue'}} className="smurfForm">
            <h2> Want to add a new Smurf:</h2>
            <form onSubmit = {e => handleSubmit(e)}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={newSmurf.name}
                    onChange={e => handleChange(e)}/> <br/><br/>
                 <input
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={newSmurf.age}
                    onChange={e => handleChange(e)}/> <br/><br/>
                <input
                    type='text'
                    name='height'
                    placeholder='Height'
                    value={newSmurf.height}
                    onChange={e => handleChange(e)}/> <br/><br/>

            </form>
            <button style={Buttons} type="submit" onClick={handleSubmit}>
          Add Smurf!
        </button>
            
        </div>
    )
}

export default SmurfsForm
