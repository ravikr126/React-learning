import React from "react";
import { useState } from "react";


const App =() =>{
    //1st state
    const[name,setName]= useState("");
    //2nd state
    const[lastName, setLastName] = useState('');
    //3rd state
    const[fullName,setFullName]=useState("");
    //4th state
    const[lastNamenew, setLastNameNew]= useState("");

    const inputEvent=(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    };

    const inputEventtwo=(event) =>{
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