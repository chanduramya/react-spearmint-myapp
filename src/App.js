import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
function App() {
  const [state, setState] = useState({
    xoffset: 0,
    yoffset: 0,
    delta: 10,
})
const [yAxiesFlag, setYAxiesFlag]= useState(true)
const [xAxiesFlag, setXAxiesFlag]= useState(true)

useEffect(()=>{
  setTimeout(()=>{
    if(state.xoffset < 400 && xAxiesFlag){
      setState(prevState => ({
        ...prevState,
        ...prevState.xoffset= Number(prevState.xoffset) + Number(prevState.delta)
    }))
    }else if(state.yoffset < 400 && yAxiesFlag){
      setState(prevState => ({
        ...prevState,
        ...prevState.yoffset= Number(prevState.yoffset) + Number(prevState.delta)
    }))
    }else if(state.xoffset > 0){
      setXAxiesFlag(false)
      setState(prevState => ({
        ...prevState,
        ...prevState.xoffset= Number(prevState.xoffset) - Number(prevState.delta)
    }))
    }else if(state.yoffset > 0){
        setYAxiesFlag(false)
        setState(prevState => ({
          ...prevState,
          ...prevState.yoffset= Number(prevState.yoffset) - Number(prevState.delta)
      }))
    }
    
  },100)
})
  return (
    <div className="App">
      <div>
                {/* Element to Move Dynamically */}
                {/* <h2
                    style={{
                        position: "absolute",
                        left: `${state.xoffset}px`,
                        top: `${state.yoffset}px`,
                    }}
                > */}
                   <img 
                    style={{
                      position: "absolute",
                      left: `${state.xoffset}px`,
                      top: `${state.yoffset}px`,
                      width: 150,
                      height: 150
                  }}
                   src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"/>
                {/* </h2> */}
 
                {/* Move Controls */}
                
            </div>
    </div>
  );
}

export default App;
