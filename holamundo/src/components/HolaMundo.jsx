import React from 'react';

const HolaMundo = () => {
    const Hello = '¡HolaMundo';
    const Esencial = '¡Curso Esencial de React';
    const isTrue = true;
    return(
        <div className="HolaMundo">
             <h1>{Hello}</h1>
             <h2>{Esencial}</h2>
             <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
             {isTrue ? <h4>Esto es Verdadero</h4> : <h5>Soy Falso</h5>}
             {isTrue && <h4>Soy Verdadero</h4>}
        </div>
    );
}; 


export default HolaMundo; 