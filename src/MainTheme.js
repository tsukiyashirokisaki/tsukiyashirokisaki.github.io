import React from "react";
import Education from "./component/Education";
import Experience from "./component/Expereince";
import {education,experience,intro} from "./data.js"
function MainTheme() {
    return <div style={{ display: 'block' }} className="content">
        <div id="Education" className="section">
            <div className="title">Education</div>
            {education.map(
                data => <Education name={data[0]} major={data[1]} time={data[2]} key={data[0]}></Education>)
            }
        </div>
        <div id="Experience" className="section">
            <div className="title">Experience</div>
            {experience.map(data=><Experience src={data.src} key={data.title} title={data.title} description={data.description} time={data.time}/>)}
        </div>
        <div id="Introduction" className="section">
            <div className="title">Introduction</div>
            <div className="innerText" style={{padding:"10px"}}>{intro}</div>
        </div>
    </div>
}
export default MainTheme;