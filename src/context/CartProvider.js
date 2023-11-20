import React,{useState} from "react";
import cartContext from "./cartContext";

const CartProvider = (props) => {
 
    // let name = "Abhishek"
    // let age = 10
    let [cart, setCart] = useState([
        {
            id:1,
            name: "Iphone",
            quantity: 10
        },
        { 
            id:2,
            name: "Samsung",
            quantity: 20
        },
        {
            id:3,
            name: "Nokia",
            quantity: 30
        }

    ])

    return(
          <cartContext.Provider value={
            {
                cart: cart,
                setCart: setCart,
            
            }
          }>  
             {props.children}
          </cartContext.Provider>
    )


}

export default CartProvider;





// cartContext = {
//     Provider: Component,
//     Consumer: Component,

// }