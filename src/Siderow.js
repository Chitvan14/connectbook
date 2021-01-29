import React from 'react';
import {Avatar} from '@material-ui/core';
import "./Siderow.css";

function Siderow({src,Icon,title}) {
    return (
        <div className="siderow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
            
        </div>
    )
}

export default Siderow
