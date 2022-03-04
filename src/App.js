import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ComponenteImagen} from './components/ItemCarrousel/ItemCarrousel';
import {MetodosDePago} from './components/MetodosDePago/MetodosDePago';
import {Contador} from './components/Contador/Contador';
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer';

function App() {

    //Consulta a la página de pokemon

    return ( 
        <div className='App'>
        
            <div className = "App" > 
                <NavBar />
            </div>

            <div>
                <ComponenteImagen/>
                <br/>
            </div>

            <div>
                <MetodosDePago/>
            </div>

            <div>
                <br></br>
                <Contador initial={1} stock={10}/>
            </div>

            <div>
                <ItemListContainer/>
            </div>

        </div>
    );
    
}

export default App;