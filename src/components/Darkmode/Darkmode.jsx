import React, { useState } from 'react'

function Darkmode() {
    const [mode,setMode] = useState("darkmode");
    function toggle(){
        if(mode ==="darkmode"){
            setMode("lightmode")
        }else{
            setMode("darkmode")
        }
    }
  return (
    <button onClick={()=>{
        toggle()
        console.log(mode);
    }}>dark</button>
  )
}

export default Darkmode
