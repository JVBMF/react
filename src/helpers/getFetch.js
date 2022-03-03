export const productos=[
    {id:1, name:'remeras', stock:5},
    {id:2, name:'zapatillas', stock:7},
    {id:3, name:'pantalones', stock:10},
]

export const getFetch = new Promise((resolve,reject)=>{

    let url='juan.com';

    if(url==='juan.com'){
        setTimeout(()=> 
        {
            resolve(productos);
        },3000)
    }
    else{
        reject('400 not found');
    }
    
})