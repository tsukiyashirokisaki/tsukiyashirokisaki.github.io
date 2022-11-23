import './App.css';
import React from 'react';
import Person from './component/Person';
import Button from './component/Button';
import MainTheme from './MainTheme';
function App() {
  let arr = ['Education', 'Experience', 'Introduction'];
  // const [mode, setMode] = useState(arr[0]);
  return (
    <div style={{ display: 'block' }}>
      {/* <button>hello</button> */}
      <div className="App" style={{ margin: '50px', display: 'flex' }}>
        <div >
          <Person />
          {arr.map((ele) => <Button val={ele} key={ele} />)}
        </div>
        <MainTheme></MainTheme>
      </div>
    </div>
  );
}

export default App;
