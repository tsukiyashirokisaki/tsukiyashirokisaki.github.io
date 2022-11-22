import React from "react";
import ntu_logo from "../asset/ntu_logo.png"
function Education(props){
    return <div className="innerText" key={props.name} style={{alignItems:'center',display:'flex',padding:"10px"}}>
        <img src={ntu_logo} style={{height:'60px',marginRight:'20px'}}/>
        <div>{`${props.name}: ${props.major}`}</div>
        <div style={{marginLeft:'auto'}}>{`${props.time}`}</div>
    </div>

}
export default Education;