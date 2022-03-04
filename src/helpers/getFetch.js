export const productos=[
    {id:1, name:'remera'},
    {id:2, name:'zapatilla'},
    {id:3, name:'pantalon'},
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