import React from "react";
import AboutMe from "./AboutMe";
function MainTheme(props) {
    switch(props.curPage){
        case "About Me":
            return <AboutMe/>
        default:
            return <div/>
    }
    
}
export default MainTheme;