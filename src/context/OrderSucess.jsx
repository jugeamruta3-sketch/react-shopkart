import { useNavigate } from "react-router-dom";

export default function OrderSucess()
{
    const navigate= useNavigate()
    return(
        <div className="Sucess-Container">
                  <div className="Sucess-Card">
                    <h1>Order Place Sucessfully</h1>
                    <button onClick ={()=>navigate("/")}>Go to Home </button>
                  </div>
        </div>
    );

}