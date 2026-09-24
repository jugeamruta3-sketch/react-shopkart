import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Payment()
{
    const navigate=useNavigate()
    const {state}=useContext(Cartcontext);
    const total=(state?.cart??[]).reduce ((acc,item)=>acc+item.price,0);

    const handlePayment=()=>{
        dispatchEvent({type:"CLEAR_CART"});
        alert("Payment Sucessfully");
        navigate("/sucess");
    };
    return(
        <div classname="Payment-Container">
             <div classname="Payment-Cart">
          <h2>Payment</h2>
          <p> Total Amount:${total}</p>
          <input palceholder="card-number"/>
          <input palceholder="card-holder-name"/>
          <input palceholder="Cvv"/>
          <button onClick={handlePayment}>Pay now</button>
             </div>
        </div>
    )
}