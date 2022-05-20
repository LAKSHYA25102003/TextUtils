import React, { useState } from 'react'
import "./TextArea.css";

function TextArea(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='TextArea container my-4' style={{color:props.mode==="dark"?"white":"black"}}>
                <h3>Convert Lowercase to Uppercase and Vice-Versa</h3>
                <div className="mb-3">
                    <textarea style={{
                backgroundColor:props.mode==="dark"?"gray":"white",
                color:props.mode==="dark"?"white":"black"}} className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleChange}></textarea>
                </div>



            </div>

            <div className="container">
                <button type="button" class="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" class="btn btn-primary" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button type="button" class="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
                <h3>Your text summary</h3>
                <p>Total Words:{text.split(" ").length} Total Characters:{text.length}</p>
            </div>
            <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in text box to preview here.."}</p>
            </div>
        </>
    )
}

export default TextArea;