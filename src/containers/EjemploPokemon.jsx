import {useEffect } from 'react'

function EjemploPokemon(){

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10' /* &offset=200 */) //Le pongo limit=10 y quito &offset=200 que no se que es 
        .then(resp => resp.json())
        .then((resp) =>console.log(resp.results))
    },[])

    return(
        
        <div>
            
        </div>
    )
}

export{EjemploPokemon}