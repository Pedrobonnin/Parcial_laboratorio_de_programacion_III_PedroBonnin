import React,{Component} from "react";
import Datos from "../Recursos/Datos.json";

function Calendario(props){
    return(
        <li>
            <a href={props.el.mes} target="_blank" rel="noreferrer">{props.el.nombre}</a>
        </li>
    );
}



export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            meses:["Enero","Febrero","Marzo","Abril","Mayo","Junio"]//arreglo
        }

    }

    render(){

    return(
        <div>
            <h2>Renderizado elementos arreglo </h2>
                <h3>Calendario</h3>
                <ol>
                {this.state.meses.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
                </ol>
                <h3>Calendario</h3>
                <ul>
                    {
                    Datos.calendario.map((el, index) => (<Calendario key={index} el={el} ></Calendario>))//Renderiza json
                    }
                </ul>
        </div>
    );
  }
}



           
     
