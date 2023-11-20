
import React,{useContext} from "react";
import cartContext from "../context/cartContext";

const Hello = () => {

    const {cart, setCart} =  useContext(cartContext)

    // console.log(cart); [{} , {} , {}]

    return(
        <div style={{border: "2px solid green"}}>
              

              {
                cart.map(item => (
                    <div key={item.id}>
                         <h4>Product is: {item.name}</h4>
                         <p>Quantity: {item.quantity}</p>
                    </div>
                ))
              }





            
        </div>
    )
}

export default Hello;




// <h3>Product Name: {cart.name}</h3>
//             <p>Quantity: {cart.quantity}</p>
//              <button onClick={()=>setCart({...cart, quantity: cart.quantity+1})}> Inc Qunatity</button>