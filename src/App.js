import React,{useState} from "react"
import './App.css';


function App() {
 const[count,setcount]=useState(0)


 function decHandler(){
  setcount(count-1)
 }
 function incHandler(){
  setcount(count+1)
 }
 function resetHandler(){
  setcount(0)
 }
  return (
    <div className="wrapper">
      <div className="title">Increment && decrement</div>
      <div className="buwr">
        <button onClick={decHandler} className="btn1">
          -
        </button>
        <div className="value">
        {count}
        </div>
        <button onClick={incHandler} className="btn1">
          +
        </button>
        
      </div>
      <button onClick={resetHandler} className="reset">
        reset
      </button>
    </div>
      
  );
}

export default App;
