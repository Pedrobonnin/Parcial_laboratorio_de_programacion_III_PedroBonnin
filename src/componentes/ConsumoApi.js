import React, { Component } from "react";
import '../componentes/css/Style.css';

function Lista(props) {
 // console.log(props) 
 
 //componente funcional
  return (
    <card>
      <hr/>
      <img src={props.Foto} alt={""}/>
      <br/>
      <card>{props.nombre}</card>
      <br/>
      <card>{props.especie}</card>
      <br/>
      <card>{props.estatus}</card>
    </card>
  );
}


export default class ConsumoApi extends Component {
  state = {
    data: [], //inicio el estado que almacenará los datos de la API
  };

 
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")//llamada a la API dentro con componente componentDidMount()
    .then((res) => {return res.json(); })
    .then((json) => {  

      json.results.forEach((el) => {
              fetch(el.url)
                .then((res) => res.json())
                .then((json) => {
                  //console.log(json);
                  let caracteres = {id: json.id, nombre: json.name, especie:json.species, Foto: json.image, estado:json.status};

              let data = [...this.state.data, caracteres];

              this.setState({ data,  });
              //console.log(data);

            });
          });
      });
    }
  //soy un comentario
  //renderizado
  render() {
    return (
      <>
        <div className="row">
          {this.state.data.map((element, index) =>(
              <div key={index} className="col mt-4">
                <div className="card" style={{minWidth:"200px"}}> 
                  <Lista  estatus={element.estado}  Foto={element.Foto} />
                  <div className="card-body">
                      <h5 className="card.title">
                        <Lista nombre={element.nombre}  especie={"Especie: "+element.especie} />
                      </h5>
                  </div>
                </div>
        
        </div>
        ))}
         </div>  
      </>
    );
  };
};