import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ComponenteImagen} from './components/ItemCarrousel/ItemCarrousel';
import {MetodosDePago} from './components/MetodosDePago/MetodosDePago';
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './containers/ItemDetailContainer/ItemDetailContainer'

function App() {


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
                <ItemListContainer/>
                <ItemDetailContainer/>
            </div>

        </div>
    );
    
}

export default App;