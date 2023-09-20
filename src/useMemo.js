import React,{useState,useMemo} from "react";

function UsememoE(){
    const[number,setNumber]=useState(0);
    const[a,setA]=useState(0);
    const[b,setB]=useState(0);
    const[count,setCount]=useState(0);

const updateNumber = (e)=>{
    setNumber(e.target.value);

}
const updateA = (e)=>{
    setA(e.target.value);

}
const updateB = (e)=>{
    setB(e.target.value)
    

}
const increasecount=()=>{
    setCount(count+1)
}
const dobulenumber=()=>{
    setNumber(number*2)
}

const mulV = useMemo (()=>{
    mul(b)
                  },[b])

const addV = useMemo (()=>{
                    add(a)
                        },[a])

const squareV = useMemo (()=>{
             square(number)
                   },[number])
return(
    <div>
        Number for square< input type="number" value={number}  onChange={updateNumber}/><br></br>
        Number for add< input type="number" value={a}  onChange={updateA}/><br></br>
        Number for mull< input type="number" value={b}  onChange={updateB} /><br></br>
       <button onClick={increasecount}>Button</button>
       <button onClick={dobulenumber}>square</button>
       <h1>Count value:{count}</h1>
       <h1>square value :{squareV}</h1>
       <h1>add value:{addV}</h1>
       <h1>mull value :{mulV}</h1>
    </div>
)
}
function square(number){
    console.log('square function')
    return number*2
}
function add(a){
    console.log('add function')
    return a+10
}
function mul(b){
    console.log('mul function')
    return b*2
}

export default UsememoE;