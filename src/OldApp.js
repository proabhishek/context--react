import React from "react";
import Hello from "./Components/Hello";
import Hii from "./Components/Hii";

const OldApp = () => {



  return(
    <div>
      <Hello> 
          <h1>I am dancing</h1>
          <p> I am a dancer</p>
          <p> I am a Singer too</p>


      </Hello>



      <Hello> 
         <p> I am Amit Block</p>
      </Hello>




      <Hello> 
          <Hii />
      </Hello>

    </div>
  )
}

export default OldApp;