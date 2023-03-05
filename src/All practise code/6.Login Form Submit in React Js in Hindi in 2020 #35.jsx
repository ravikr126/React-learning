import React from "react";
import { useState } from "react";


const App =() =>{
    const[name,setName]= useState("");

    const[lastName, setLastName] = useState('');

    const[fullName,setFullName]=useState("");

    const[lastNamenew, setLastNameNew]= useState("");

    const inputEvent=(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    };

    const inputEventtwo=(event) =>{
        //console.log(event.target.value);
        setLastName(event.target.value);
    };

    const onSubmits = (event) =>{
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
        
    }
return (
    <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
        <div>
                <h1> Hello {fullName} {lastNamenew}</h1>
                <input type="text" placeholder="Enter your name" onChange={inputEvent}
                value={name}  />
                <br />

                <input type="text" placeholder="Enter your last name" onChange={inputEventtwo}
                value={lastName}  />
                <button>Click me</button>
        </div>
    </form>
    </div>
    </>
);
};

export default App;