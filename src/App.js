import './App.css';
import React, { useState } from 'react';
import Person from './component/Person';
import Button from './component/Button';
import MainTheme from './container/MainTheme';


function App() {
  const quick_link = ['Education', 'Experience', 'Introduction'];
  const [curPage] = useState("About Me");
  return (
    <div style={{ display: 'block' }}>
      <div className="App" style={{ padding: '50px' }}>
        {/* <div style={{marginBottom:'20px',backgroundColor:'#333333'}}>
          {pages.map(data => <Button key={data} val={data} className={(curPage===data)?"button_clicked":""} onClick={()=>setCurPage(data)}></Button>)}
        </div> */}
        <div style={{ display: 'flex' }}>
          <div >
            <Person />
            {(curPage === "About Me")?
            quick_link.map((data) =>
              <a key={data} href={`#${data}`} style={{ textDecoration: 'none' }}>
                <Button className="main_theme_button" val={data} />
              </a>
            ):
            <div/> 
            }
          </div>
          <MainTheme curPage={curPage}></MainTheme>
        </div>
      </div>
    </div>
  );
}

export default App;
