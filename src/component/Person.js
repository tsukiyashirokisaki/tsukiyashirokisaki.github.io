import React from 'react';
import me from '../asset/avatars.png';
function Person() {
    return (
        <div style={{textAlign:'center',height:'500px',width:'500px'}}>
            <img src={me} style={{width:'300px',backgroundColor:'white',borderRadius:'50%'}}/>
            <div style={{fontSize:'80px',color:'white'}}> Po-Hsun Lin</div>
        </div>
    );
  }
  
export default Person;
