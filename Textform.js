import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();

    setText(newText);
  }

  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleOnchange=(event)=>{
    // console.log("on change");
    setText(event.target.value); 
  }


  const clearbox=()=>{
    setText('');
  }
  const capitallised=()=>{
    const newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  }
  const textbold=()=>{
    const newText = text.textbold();
    setText(newText);
  }
  const copytext=()=>{
    const newText =document.getElementById("mybox");
   newText.select();
    navigator.clipboard.writeText(newText.value);
  }
  const handelextraspaces=()=>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const[text, setText] = useState('Enter text here');

  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'gray':'white',
color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
    </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lower case</button>
  <button className="btn btn-primary mx-2" onClick={clearbox}>clear box</button>
  <button className = "btn btn-primary mx-2" onClick={capitallised}>capitallised case</button>
  <button className="btn btn-primary mx-2" onClick={copytext}>text copy</button>
  <button className="btn btn-primary mx-2" onClick={handelextraspaces}>extra spaces</button>
    </div>

    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>you text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
