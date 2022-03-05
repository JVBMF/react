export const productos=[
    {id:1, name:'remera',foto: <img src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-icono-de-trazo-de-color-iconos-sociales.png"></img> },
    {id:2, name:'zapatilla',foto: <img src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-icono-de-trazo-de-color-iconos-sociales.png"></img> },
    {id:3, name:'pantalon',foto:<img src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-icono-de-trazo-de-color-iconos-sociales.png"></img> }
]

export const getFetch = new Promise((resolve,reject)=>{

    let url='juan.com';

    if(url==='juan.com'){
        setTimeout(()=> 
        {
            resolve(productos);
        },2000)
    }
    else{
        reject('400 not found');
    }
    
})