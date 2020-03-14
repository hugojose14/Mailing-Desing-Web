import '../styles/index.css';
import React from 'react';

class Menu extends React.Component{

    render(){
        return(
            <div className="menu">
                <div>
                    <ul id="button">
                        <li><a href="#hombre">Hombre</a></li>
                        <li><a href="#mujer">Mujer</a></li>
                        <li><a href="#niñas">Niñas</a></li>
                        <li><a href="#niños">Niños</a></li>
                        <li><a href="#personalizar">Personalizar</a></li>
                    </ul>
                </div>

            </div>

        )
    }
}

export default Menu;
