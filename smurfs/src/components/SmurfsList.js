import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';

const SmurfsList = props => {
    //add context
	const { smurfs} = useContext(SmurfContext);

	return (

    // mapping over data
		<div className="SmurfsList">
			{smurfs && smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf} />)}
		</div>
	);
};

export default SmurfsList;