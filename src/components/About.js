import React, { useState } from 'react'

export default function About() {
  const[myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white',
  })
   const[btnText,setBtnText]=useState('Enable dark Mode')


  const toggleStyle=()=>{
    if(myStyle.color==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText('Enable Dark Mode')

    }else{
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
      })
      setBtnText('Enable Light mode')

    }
  }
 
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About This project :-
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is my first project in React.</strong> In this project i am try to create Text-Util application .you Use  this and give <code>feedbcak</code>,this is helpful...? 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Component :-
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Component used in Text-Util Project</strong> we use <code>VsCode</code>,<code>React</code>  and <code>BootStrap</code> :- for CSS
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Me
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>i`m <code>SUDHANSHU JHA</code></strong> from DARBHANGA (BIHAR). i Complete <strong>BCA</strong> from AKU PATNA. i am a <code>JAVA</code> developer..
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
</div>
    </div>
  )
}
