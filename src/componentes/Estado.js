import React, { Component } from "react";


  
export default class Estado extends Component {
  constructor(props) { //inicializa el estado que es un objeto
    super(props); //Referencia al contructor de la clase padre 
    this.state = {
      contador: 0, //Variable contador inicia en 0
    };

    setInterval(() => { //actualiza el estado cada x tiempo
      this.setState({ 
        contador: this.state.contador + 1, //Modifica el contador del estado mas 1
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h2>El Estado</h2>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}