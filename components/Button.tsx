"use client"


export const Button = ()=>{

    function handler(){
        console.log("hi there")
    }

    return  <button onClick={handler}>Sign in</button>
    
}