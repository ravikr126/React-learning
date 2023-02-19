import React from "react";
import { useState } from "react";




const App =() =>{

   // const state= useState();
    const [count , setCount]=useState(0);
    const IncNum=()=>
    {
        setCount(count+1)
    };
    const DecNum=()=>
    {
        setCount(count-1)
    };

 
return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Increse me </button>
    <button onClick={DecNum}>Decrease me </button>
    </>
)
};

export default App;