import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemCarrousel} from './components/ItemCarrousel/ItemCarrousel';
import {MetodosDePago} from './components/MetodosDePago/MetodosDePago';
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import {Cart} from './components/Cart/Cart'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


    return ( 
        <BrowserRouter>
            <div className='App'>

                <div className = "App" > 
                    <NavBar />
                </div>             

                <Routes>
                    <Route path='/' element={<ItemCarrousel/>}/>
                    <Route path='/pagos' element={<MetodosDePago/>}/>
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/> {/* Lo que esta escrito despues de detalle se guarda como parametro por estar después de los :, el cuál habrá que capturar */}
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/lista' element={<ItemListContainer/>}/>
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
                    <Route path='/*' element={<Navigate to='/' replace/>} />
                </Routes>

            </div>
        </BrowserRouter>
    );
    
}

export default App;