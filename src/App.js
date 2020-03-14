import React, { Component } from 'react';
import Logo from './components/logo';
import Menu from './components/menu';
import Contenido from './components/contenido';
import './styles/index.css';

class App extends Component{

  render(){

    return (
      <div className = "app"> 
        <div className= "row">
          <Logo></Logo>
          <Menu></Menu>
          <Contenido></Contenido>
        </div>
      </div>
    )
  }
}

export default App;