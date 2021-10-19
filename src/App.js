import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import {Link} from 'react-router-dom'

import ListarProspectos from './components/ListarProspectos'
import CrearProspecto from './components/CrearProspecto'
import Inicio from './components/Inicio'
import Evaluacion from './components/Evaluacion'
import DetallesProspecto from './components/DetallesProspecto'



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only"></span></Link>
                <Link className="nav-item nav-link" to={"/capturar"}>Capturar Prospecto</Link>
                <Link className="nav-item nav-link" to={"/listar"}>Listado de prospectos</Link>
                <Link className="nav-item nav-link" to={"/evaluar"}>Evaluación prospectos</Link>
            </div>
        </nav>
      <div className="container">
        
        <br></br>

        <Route exact path="/" component={Inicio}></Route>
        <Route exact path="/listar" component={ListarProspectos}></Route>
        <Route exact path="/capturar" component={CrearProspecto}></Route>
        <Route exact path="/evaluar" component={Evaluacion}></Route>
        <Route exact path="/detalles" component={DetallesProspecto}></Route>
      </div>
    </Router>
  );
}

export default App;
