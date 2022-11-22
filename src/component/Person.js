import React from 'react';
import me from '../asset/avatars.png';
function Person() {
    return (
        <div style={{textAlign:'center',width:'200px'}}>
            <img src={me} style={{width:'100px',backgroundColor:'white',borderRadius:'50%'}}/>
            <div style={{fontSize:'24px',color:'white'}}> Po-Hsun Lin</div>
        </div>
    );
  }
  
export default Person;
