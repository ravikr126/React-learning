import React from "react";
import { useState } from "react";


const App =() =>{
    const purple="#8e44ad"
    const [bg,setBg]=useState(purple);
    const[name, setName]=useState('click me');
    const bgChange = () =>
    {
        let newBg='#34495e';
        setBg(newBg);
        setName("hii")
        
    };
    
    const bgBack=()=>{
        setBg(purple);
        setName("kya haal hai");
    }
return (
    <>
    <div style = {{ backgroundColor : bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
           {name}
        </button>
    </div>
    </>
);
};

export default App;