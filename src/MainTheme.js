import React from "react";
import ntu_logo from "./asset/ntu_logo.png"
import Experience from "./component/Expereince";
import {education,experience,intro} from "./data.js"
function MainTheme() {
    return <div style={{ display: 'block' }} className="content">
        <div id="Education" className="section">
            <div className="title">Education</div>
            {education.map(
                ele => <div className="innerText" key={ele[0]} style={{alignItems:'center',display:'flex'}}>
                    <img src={ntu_logo} style={{height:'60px',marginRight:'20px'}}/>
                    <div>{`${ele[0]}: ${ele[1]}`}</div>
                    <div style={{marginLeft:'auto'}}>{`${ele[2]}`}</div>
                    </div>)
            }
        </div>
        <div id="Experience" className="section">
            <div className="title">Experience</div>
            {experience.map(data=><Experience src={data.src} key={data.title} title={data.title} description={data.description}/>)}
            

        </div>
        <div id="Introduction" className="section">
            <div className="title">Introduction</div>
            <div className="innerText">{intro}</div>
        </div>
    </div>
}
export default MainTheme;