import React,{Component} from "react";


function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}


function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    );
}


export default class RenderizadoComponentes extends Component{
    constructor(props){
        super(props);
        this.state={
            session:true,
        }
    }
    render(){
        return( //Renderiza uno u otro en base a la variable booleana de "session"
            <div>
                <h2>Renderizado componentes</h2>
                {this.state.session?<Login/>:<Logout/>}   
            </div>
        )
    }
}