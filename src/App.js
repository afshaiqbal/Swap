import {React,useState} from 'react';
import './App.css';


function App() {
 const[text1,setText1]=useState("");
 const[text2,setText2]=useState("");
   const change=()=>{
     var temp=text2;
   setText2(text1);
   setText1(temp);

  }


  return (
    <>
    <div className="container">
      <div className="input1">
      <input type ="text" placeholder="text" value={text1} onChange={event => setText1(event.target.value)}
>
      </input>
      <button className="button" onClick={change}>swap</button>
    </div>
    <div className="input2">
      <input type="text" placeholder="text" value={text2} onChange={event => setText2(event.target.value)}>
      </input>
      <button className="button" onClick={change}>swap</button>
    </div>
    </div>
    </>
  );
}

export default App;
