import React from 'react';
function Button(props) {
    return (
        <a href={`#${props.val}`} style={{ textDecoration: 'none' }}>
            <button className="main_theme_button" style={{ cursor: "pointer" }}>
                {props.val}
            </button>
        </a>
    );
}

export default Button;
