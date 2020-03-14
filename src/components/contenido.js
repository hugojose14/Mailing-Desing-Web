import React from 'react';
import '../styles/index.css';

class Contenido extends React.Component{

    render(){

        return(
            <div className="contenido"> 

                <h1>MÁS<br/>PRODUCTOS</h1>
                <p>Hasta un 40% de descuento en aún más productos. <br/> Consiguelos antes de que se agoten.*</p>
                <button className="boton">COMPRAR AHORA</button>
            </div>
        )
    }
}

export default Contenido;