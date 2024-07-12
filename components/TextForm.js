import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('On click was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper-Case!',"success");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to Lower-Case!',"success");
    }
    const handleClClick=()=>{
      let newText="";
      setText(newText)
      props.showAlert('Cleared',"success");
    }
    const handleCoClick=()=>{
      var text = document.getElementById('myBox')
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value)
      props.showAlert('Copied!',"success");
    }
    const handleOnChange = (event)=>{
        //console.log('On change was clicked');
        
        setText(event.target.value);
    }
    const handleReClick = ()=>
      {
        let newText = text.split('').reverse().join('')
        setText(newText)
        props.showAlert('Reversed-Case!',"success");
      }
    const [text, setText] = useState('');
    //setText('new Text') crt way to change the state
    //text = "new text" wrong way to change the text
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>{props.heading}</h2>   
   <div className="form-group">
    <textarea className="form-control" id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} rows="10"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-3" onClick={handleClClick}>Clear box</button>
  <button className="btn btn-primary mx-3" onClick={handleCoClick}>Copy</button>
  <button className="btn btn-primary mx-3" onClick={handleReClick}>Reverse</button>
  </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
       <p>{text.length>0?text:'Enter something in the textbox above to preview it.'}</p>
    </div>
    </>
  )
}
