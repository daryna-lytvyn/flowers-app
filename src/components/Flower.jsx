import React, {useState} from 'react';

const Flower = ({ flow:  { flowerType, variety} }) => {
    
    const [status, setStatus] = useState(false)
    
    const handleCheckboxChange = (event) => {
        setStatus(!status);
    };

    return (
        <div className='flower'>
            
            <div className='flower_info'>
                <h2>Flower</h2>
                <p>{flowerType}, {variety} </p>
                {status ? <h3>You chose this flower!</h3> : null}
            </div>
            
            <input  
                    type="checkbox" 
                    checked={status}
                    onChange={handleCheckboxChange}>
            </input>
                                   
        </div>
    );
};

export default Flower;
