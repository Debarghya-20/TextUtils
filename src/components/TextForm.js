import React, {useState} from 'react'



export default function TextForm(props) {

    const handleClick = ()=>{

        console.log("Button was Clicked");

        let newText = text.toUpperCase();
        setText(newText)

    }

     const handleChange = (event)=>{

        setText(event.target.value)

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[  ] + /);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
    return (

        <>


        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>

           <h1> {props.heading} </h1> 
           <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-3" onClick = {handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary ms-3" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary ms-3" onClick = {handleExtraSpace}>Remove Extra Space</button>
        </div>


        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>

            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

            <h2>Text Preview</h2>
            <p>{text}</p>

        </div>


        </>
    )
}
