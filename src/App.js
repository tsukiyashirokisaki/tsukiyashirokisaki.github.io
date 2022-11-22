import './App.css';
import React, { useState } from 'react';
import Person from './component/Person';
import Button from './component/Button';
import MainTheme from './MainTheme';
function App() {
  let arr = ['Education','Experience','Introduction'];
  const [mode, setMode] = useState(arr[0]);
  return (
    <div className="App" style={{margin:'50px',display:'flex'}}>
      <div style={{display:'block',backgroundColor:'#000000',padding:'20px'}}>
        <Person/>
        {arr.map((ele)=><Button val={ele} key={ele} mode={mode} onClick={()=>{setMode(ele)}} />)}
        <a href={"https://scholar.google.com.tw/"}>resume</a>
      </div>
      <MainTheme mode={mode}></MainTheme>
      
    </div>
  );
}

export default App;
