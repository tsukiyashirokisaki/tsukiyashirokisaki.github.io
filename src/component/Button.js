import React from 'react';
function Button(props) {
    return (
        <a href={`#${props.val}`} style={{textDecoration:'none'}}>
            <button className='button' style={{backgroundColor:(props.mode===props.val)?'#3E3E3E':'#000000',cursor:'pointer'}} onClick={props.onClick}>
                {props.val}
            </button>
        </a>
    );
  }
  
export default Button;
