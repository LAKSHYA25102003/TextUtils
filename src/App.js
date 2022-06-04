import React,{useState} from 'react';
import Navbar from './Navbar'
import TextArea from './TextArea';
function App() {

  const [mode,setMode]=useState("light");

  const[checkState,setCheckState]=useState("dark");

  const [checkText,setCheckText]=useState("Enable Dark mode")
  
  const changeMode=()=>{
    if(mode==="light")
    {
        setMode("dark");
        setCheckState("light")
        setCheckText("Enable Light mode")
        document.body.style.backgroundColor="#042743";
    }
    else
    {
      setMode("light");
      setCheckState("dark")
      setCheckText("Enable Dark mode")
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <div className="App">

      <Navbar mode={mode} changeMode={changeMode} checkState={checkState} checkText={checkText} />
      <TextArea mode={mode} />
    </div>
  );
}

export default App;
