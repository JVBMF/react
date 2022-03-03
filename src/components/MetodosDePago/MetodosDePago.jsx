import React from 'react';
import './MetodosDePago.css'

const MetodosDePago = () =>{
    return(
        <div className='conteMetodosDePago'>

            <div className="metodosDePago">

                <div id="metodoDePago1">
                    <a href="#">
                        <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="60 rem"/>
                        Efectivo    
                    </a>
                </div> 

                <div id="metodoDePago2">
                    <a href="#">
                        <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="60 rem"/>
                        Tarjeta de credito
                    </a>
                </div>

                <div id="metodoDePago3">
                    <a href="#">
                        <img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="60 rem"/>
                        Tarjeta de debito
                    </a>
                </div>

            </div>
            
        </div>
    )
}

export {MetodosDePago}
