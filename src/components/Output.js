import React from 'react';

function Output(props) {
    return (
        <div id = 'output' className ='output'>
            <div id = 'formula'>
                {props.formula}
            </div>
            <div id = 'display'>
                {props.expression}
            </div>
            
        </div>
    );
}

export default Output;