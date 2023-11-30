import { useState } from "react";

const Bhargav = () => {
   
    const [btnClick, setBtnClick] = useState(false);

    return(
        <div>
             <button onClick={()=>setBtnClick(true)}> Know More </button>
             {btnClick && <p>I am a software developer</p>}
        </div>
    )
}

export default Bhargav;