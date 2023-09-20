import React,{useRef} from "react";
 function Useref(){
    const count =useRef(0);
    const checkvalue=()=>{
        count.current++;
        console.log("count value " +count.current)
    }
    
    return(
    <button onClick={checkvalue}>check value</button>
    
   
    )
    
    
 }
 export default Useref;