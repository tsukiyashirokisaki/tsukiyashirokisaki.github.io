import React from "react";
function Experience(props){
    return <div style={{alignItems:'center',display:'flex',padding:"20px"}}>
        <img src={props.src} style={{width:"200px",height:"200px",backgroundColor:"white",marginRight:"20px",marginBottom:"20px"}}/>
        <div className="innerText">
            <div style={{fontWeight:"bold"}}>{`${props.title}`}</div>
            {`${props.description}`}
        </div>
        
    </div>

}
export default Experience;