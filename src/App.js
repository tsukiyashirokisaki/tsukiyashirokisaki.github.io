import './App.css';
import React, { useState } from 'react';
import Person from './component/Person';
import Button from './component/Button';
import MainTheme from './container/MainTheme';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'

function App() {
  const quick_link = ['Education', 'Experience', 'Introduction'];
  const pages = ["Articles", "Technologies", "Travel", "Games", "About Me"];
  const [curPage,setCurPage] = useState("About Me");
  return (
    <div style={{ display: 'block' }}>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> */}
      <div className="App" style={{ padding: '50px' }}>
        <div style={{marginBottom:'20px',backgroundColor:'#333333'}}>
          {pages.map(data => <Button key={data} val={data} className={(curPage===data)?"button_clicked":""} onClick={()=>setCurPage(data)}></Button>)}
        </div>
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
