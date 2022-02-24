import './ItemListContainer.css'

//function ComponenteImagen(){} sería otra forma de hacerlo

const ComponenteImagen= () => {
    return(

        <div class='cart'>
            <div class='cartItem'>
                <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="180 rem"/>
                <br></br>
                <button>Añadir a Carrito</button>
            </div>

            <div class='cartItem'>
                <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="180 rem"/>
                <br></br>
                <button>Añadir a Carrito</button>
            </div>
            
            <div class='cartItem'>
                <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="180 rem"/>
                <br></br>
                <button>Añadir a Carrito</button>
            </div>
        </div>
        
    )
}

export {ComponenteImagen}