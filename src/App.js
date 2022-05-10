
import './App.css';
// import Componet from './componentes/Componet';
// import Propiedades from './componentes/Propiedades';
// import Estado from "./componentes/Estado";
// import RenderizadoComponentes from "./componentes/RenderizadoComponentes";
// import RenderizadoElementos from './componentes/RenderizadoElementos';
import ConsumoApi from "./componentes/ConsumoApi";

function App() {
  return (
    <>
    <h1>Rick and Morty </h1>
    <div className='container mt-5'>
        <section>
          <ConsumoApi/>
        </section>
    </div>
    </>
    
  );
}

export default App;
