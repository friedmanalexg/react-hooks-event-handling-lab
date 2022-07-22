// Code EyesOnMe Component Here
import React from "react";


function handleBlur (){
    console.log('Hey! Eyes on me!');
    
}  
function handleFocus (){
    console.log('Good!') 
}   

function renderEyesButton(){

    return <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>;
} 

export default renderEyesButton;