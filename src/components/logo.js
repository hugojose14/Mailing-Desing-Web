import React from 'react';
import logoNike from '../img/nike.svg';
import '../styles/index.css';

class Logo extends React.Component{

    render(){

        return(

            <div className="logo">
                <img src={logoNike} id="img"></img>
            </div>
        )

    }

}

export default Logo;