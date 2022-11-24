import React from "react";
import AboutMe from "./AboutMe";
import Page from "./Page";
function MainTheme(props) {
    switch(props.curPage){
        case "About Me":
            return <AboutMe/>
        default:
            return <Page curPage={props.curPage} />
    }
    
}
export default MainTheme;