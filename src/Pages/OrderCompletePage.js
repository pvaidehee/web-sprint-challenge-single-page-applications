import React from 'react';

import Header from '../Components/Header2';

export default function OrderComplete(props){
    console.log(props);
    return(
        <>

            <Header head="Congrats! Pizza is on it's way!!"


            />

            {props.order.map(item=>{
             return(
                 <>
                     <div className="orderText">{item.name}</div>
                     <div className="orderTitle">Size:</div>
                     <div className="orderText">{item.size}</div>
                     <div className="orderTitle">Toppings:</div>
                     {item.glutenFreeCrust ? <div className="orderText">Gluten Free Crust</div>:null}
                     {item.pepperoni ? <div className="orderText">Pepperoni</div>:null}
                     {item.sausage ? <div className="orderText">Sausage</div>:null}
                     {item.canadianBecon ? <div className="orderText">Canadian Becon</div>:null}
                     {item.spicyItalianSausage ? <div className="orderText">Spice Italian Sausage</div>:null}
                     {item.grilledChicken ? <div className="orderText">Grilled Chicken</div>:null}
                     {item.greenPeppers ? <div className="orderText">Green Peppers</div>:null}
                     {item.onions ? <div className="orderText">Onions</div>:null}
                     {item.dicedTomatos ? <div className="orderText">Diced Tomatos</div>:null}
                     {item.blackOlives ? <div className="orderText">Black Olives</div>:null}
                     {item.roastedGarlic ? <div className="orderText">Roasted Garlic</div>:null}
                     {item.artichokeHearts ? <div className="orderText">Artichoke Hearts</div>:null}
                     {item.threeCheese ? <div className="orderText">Three Cheese</div>:null}
                     {item.pineapple ? <div className="orderText">Pineapple</div>:null}
                     {item.cheese ? <div className="orderText">Extra Cheese</div>:null}
                     <div className="orderTitle">Special Instructions:</div>
                     <div className="orderText">{item.instructions}</div>

                 </>
             )
        })}

        </>
    )
}