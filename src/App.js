import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import {TituloApp} from './components/Titulo/TituloApp';
import {ComponenteImagen} from './components/ItemListContainer/ItemListContainer'


function App() {

    /* Acá puedo poner propiedades, las cuales se declaran como: const algo = valor. Estas propiedades se pueden llamar desde los hijos de App(). Para llamarlas hago (por ej): <NavBar algoo={algo}/>. 

    Estas propiedades son objetos de js, si quiero verlos con un console log me apareceran las propiedades que paso en NavBar */

   /*  const style={backgroundColor:"blue"} Esto es un estado */

    /* const saludo=()=> console.log('saludo de app') */

    /* Esto es un ejemplo de como crear una stateless component (solo muestran los datos, como TituloApp.jsx):
    
    const InputApp= () =>{

        return(
            <div>
                <input /> <br />
                <input />
            </div>
        )
    } */

    return ( 

        <div className='App' /* style={style} */>

            {/* Tengo 3 divs, tengo que, de alguna forma, usar css (style o mejor App.css) para que el ancho sea igual en todos. Voy a necesitar grid porque esto es 2D */}

            <div className = 'Titulo'> {/* En este div van titulo y subtitulo, los valores de los elementos titulo y subtitulo del objeto los defino acá */}
                <TituloApp titulo={'Titulo feo'} /* subtitulo={'alo'} saludo={saludo} *//>
            </div>

            {/* <InputApp /> */}  {/* Aca llamo a los inputs del ejemplo de statless component*/}

            <div className = "App" > {/* En este div va la NavBar */}
                <NavBar />
            </div>

            <div> {/* En este div irá la cart */}
                <ComponenteImagen/>
            </div>

        </div>
    );
    
}

export default App;