import React,{useState} from "react";

function About() {
const style={
    backgroundColor:"white",
    color:"black",
    
}

const enableHandler=()=>{
    if(pstyle.color==='black')
    {
        let newStyle={
            backgroundColor:"black",
            color:"white",
            border:"2px solid white"
        }
        setStyle(newStyle);
        Setbtn("Enable Light mode");
    } 
    else
    {
        let newStyle={
            backgroundColor:"white",
            color:"black",
        }
        setStyle(newStyle);
        Setbtn("Enable Dark mode"); 
    }
}

const [btn,Setbtn]=useState("Enable Dark mode");


    const [pstyle,setStyle]=useState(style);

    return (
        <div className="about container my-20" style={pstyle}>
            <h1>About Us</h1>
            <div className="card text-center" style={pstyle}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <button type="button" className="btn btn-primary my-2" onClick={enableHandler} >{btn}</button>
        </div>
    );
}

export default About;