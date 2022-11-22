import './App.css';
import React, { useState } from 'react';
import Person from './component/Person';
import Button from './component/Button';
import MainTheme from './MainTheme';
import {info} from './data.js'
function App() {
  let arr = ['Education','Experience','Introduction'];
  const [mode, setMode] = useState(arr[0]);
  return (
    <div className="App" style={{margin:'50px',display:'flex'}}>
      <div style={{display:'block',backgroundColor:'#000000',padding:'20px',height:'500px'}}>
        <Person/>
        {arr.map((ele)=><Button val={ele} key={ele} mode={mode} onClick={()=>{setMode(ele)}} />)}
        <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
        {info.map(data=>
        <a key={data[1]} href={data[1]}>
        <img className='icon' src={data[0]} key={data[1]}/>
        </a>
        )}
        </div>
        
        
      </div>

      <MainTheme mode={mode}></MainTheme>
      
    </div>
  );
}

export default App;
