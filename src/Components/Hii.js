
import React,{useContext} from "react";
import cartContext from "../context/cartContext";

const Hii = () => {
    const {name,age} = useContext(cartContext)
    return(
        <div>
            <h1> Hii my name is {name}</h1>
            <p>I am of {age}</p>
        </div>
    )
}

export default Hii;