import React from 'react';
import me from '../asset/avatars.png';
import { info } from "../data.js"
function Person() {
    return (
        <div style={{ display: 'block', backgroundColor: '#000000', padding: '20px' }}>
            <div style={{ textAlign: 'center', width: '200px' }}>
                <img src={me} style={{ width: '100px', backgroundColor: 'white', borderRadius: '50%' }} />
                <div style={{ fontSize: '24px', color: 'white' }}> Po-Hsun Lin</div>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", marginTop: "20px" }}>
                {info.map(data =>
                    <a key={data[1]} href={data[1]}>
                        <img className='icon' src={data[0]} key={data[1]} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Person;
