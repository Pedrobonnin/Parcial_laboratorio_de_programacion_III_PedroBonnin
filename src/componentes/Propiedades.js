import React from "react";



//componente creado con calses 
export default function Propiedades(props) {
    return (
        <div>
            <h2> Propiedades </h2>
                <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.email}</li>
                </ul>
        </div>
    );
}
    
