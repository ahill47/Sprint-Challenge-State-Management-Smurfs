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
        e.preventDefault();// dont know if i needed this
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
        <div className="smurfForm">
            <h2> Wanna add a new Smurf</h2>
            <form onSubmit = {e => handleSubmit(e)}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={newSmurf.name}
                    onChange={e => handleChange(e)}/> <br/><br/>
                 <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={newSmurf.age}
                    onChange={e => handleChange(e)}/> <br/><br/>
                <input
                    type='text'
                    name='height'
                    placeholder='height'
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
