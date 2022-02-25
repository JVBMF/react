import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import {ComponenteImagen} from './components/ItemListContainer/ItemListContainer';
import { MetodosDePago } from './components/MetodosDePago/MetodosDePago';

function App() {


    return ( 
        <div className='App'>
        
            <div className = "App" > 
                <NavBar />
                <br></br> 
            </div>

            <div>
                <ComponenteImagen/>
                <br></br>
            </div>

            <div>
                <MetodosDePago/>
            </div>

        </div>
    );
    
}

export default App;