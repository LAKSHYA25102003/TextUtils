import React,{useState} from 'react'


function TextArea() {

    const  handleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("Write your para");
    return (
        <div className='TextArea container my-4'>
            <h3>Convert Lowercase to Uppercase</h3>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleChange}></textarea>
            </div>
            <button type="button" class="btn btn-primary" onClick={handleClick}>Convert</button>
        </div>
    )
}

export default TextArea;