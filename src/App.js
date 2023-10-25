//
// import {useState} from "react";
//
// export default function App(){
//   const [version,setVersion] = useState(0)
//
//   function handleReset(){
//     setVersion(version+1)
//   }
//   return(
//       <>
//         <button onClick={handleReset}>Reset</button>
//         <Form key = {version}/>
//       </>
//   )
// }
// function Form(){
//   const [name,setName] = useState('Clark')
//   return(
//       <>
//         <input value={name} onChange={e => setName(e.target.value)}/>
//         <p>Hello, {name}</p>
//       </>
//   )
// }

import React, { useState } from 'react';

function PrototypeFormComponent() {
    const FormData = {
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    };

    const [form, setForm] = useState(FormData);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px'
    };
    const pinkTextStyle = {
        color: 'pink', // Устанавливаем цвет текста на розовый
    };

    return (
        <div >
            <form style={formStyle} >
                <label style={{ color: 'blueviolet',padding:"10px" }}>
                    First Name:
                    <input type="text" value={form.key1} />
                </label>
                <label style={{ color: 'blueviolet',padding:"10px"  }}>
                    Last Name:
                    <input type="text" value={form.key2}  />
                </label>
                <label style={{ color: 'blueviolet' ,padding:"10px"}}>
                    Email:
                    <input type="text" value={form.key3}  />
                </label>
                <label style={{ color: 'blueviolet',padding:"10px" }}>

                    Favorite animal:
                    <input  type="text" value={form.key4}  />
                </label>
            </form>
            <div style={{ marginTop: '15px'}}>
                <p style={{ color: 'pink',paddingLeft:"10px" }}>First Name: {form.key1}</p>
                <p style={{ color: 'pink',paddingLeft:"10px" }}>Last Name: {form.key2}</p>
                <p style={{ color: 'pink' ,paddingLeft:"10px"}}>Email: {form.key3}</p>
                <p style={{ color: 'pink' ,paddingLeft:"10px"}}>
                    Favorite animal: {form.key4}</p>
            </div>
        </div>
    );
}

export default PrototypeFormComponent;
