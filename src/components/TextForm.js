import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("upper case clicked" + text);
        let newText =text.toUpperCase() ;
        setText(newText)
        props.showAlert("Converted in UpperCase","success")
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted in LowerCase","success")
   }

   const handleClear=()=>{
    // console.log("on change");
    let newText=" ";
     setText(newText);
     props.showAlert("text clear Successfully","success");
 }
 const handleReverse=()=>{
  let newText=text.split('').reverse().join('');
   setText(newText);
   props.showAlert("Reverse the Text","success")
}

const handleSpeak=()=>{
 let msg= new SpeechSynthesisUtterance();
 msg.text=text;
 window.speechSynthesis.speak(msg)
 props.showAlert("Speak Now","success")
}

const handleCopy=()=>{
 var text=document.getElementById('myBox');
 text.select();
 navigator.clipboard.writeText(text.value);
 props.showAlert("Text is copied Successfully","success")
}

const handleRemoveExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Space remove SccessFully","success")
}



    //TextArea
    const handleOnChange=(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    

    const [text, setText] = useState('');
   // text="new Text"; //wrong way to change State
   //setText("new Text"); //correct way to change State
  return (
    <>
  
<div className="container" style={{color : props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} 
    style={{backgroundColor : props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert To UpperCase</button>
<button className="btn btn-info mx-2" onClick={handleLoClick}> Convert To LowerCase</button>
<button className="btn btn-warning mx-2" onClick={handleReverse}>Reverse</button>
<button className="btn btn-success mx-2" onClick={handleCopy}>CopyText</button>
<button className="btn btn-secondary mx-2" onClick={handleSpeak}>Speak</button>
<button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
<button className="btn btn-light mx-2" onClick={handleRemoveExtraSpace}>RemoveExtraSpace</button>


    </div>

    <div className="container my-4" style={{color : props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length} words and {text.length} charectors</p>
      <p>{0.008 * text.split(" ").length } Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the text-box above to preview it here"}</p>
    </div>
    </>
  )
}
