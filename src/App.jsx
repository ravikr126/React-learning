import React from "react";
import { useState } from "react";


const App =() =>{
    const[name,setName]= useState("");
    const[fullName,setFullName]=useState();
    const inputEvent=(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    };
    const onSubmits = (event) =>{
        event.preventDefault();
        setFullName(name);
    }
return (
    <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
        <div>
                <h1> Hello {fullName}</h1>
                <input type="text" placeholder="Enter your name" onChange={inputEvent}
                value={name}  />
                <br />
                <button>Click me</button>
        </div>
    </form>
    </div>
    </>
);
};

export default App;