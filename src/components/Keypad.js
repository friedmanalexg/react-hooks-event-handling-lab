// Code Keypad Component Here
import React from "react";

function handleKeypad () {
    console.log("Entering password...")
} 

function Keypad (){
    return (
        <div> <input onChange={handleKeypad}  type="password" />  </div>
    )
}

export default Keypad;