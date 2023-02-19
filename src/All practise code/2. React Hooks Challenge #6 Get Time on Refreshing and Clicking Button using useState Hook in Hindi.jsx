import React from "react";
import { useState } from "react";




const App =() =>{

   // const state= useState();
    const [count , setCount]=useState(Date());
    const Date_Time=()=>
    {
        //const CurrDate=new Date().toLocaleDateString();
        const CurrTime=new Date().toLocaleTimeString();
        setCount(CurrTime)

    };
    

 
return (
    <>
    <h1>{count}</h1>
    <button onClick={Date_Time}>today Time </button>
    </>
)
};

export default App;