import React from 'react';
function Button(props) {
    return (
            <button className={`button ${props.className}`} style={{ cursor: "pointer" }} onClick={props.onClick}>
                {props.val}
            </button>
    );
}

export default Button;
