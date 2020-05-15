import React from 'react';

const operators = [
                    {operator: '+', id: 'add'},
                    {operator: '-', id: 'subtract'},
                    {operator: 'x', id: 'multiply'},
                    {operator: '/', id: 'divide'}
                    
                    ]
function Operators(props) {

    const Operators = operators
                      .map((operatorObj, i) => 
                      <div key = {i}
                           onClick = {props.handleClick}
                           className = 'operator'
                           id = {operatorObj.id}
                           >
                        {operatorObj.operator}
                      </div>)
    return (
        <div id = 'operators'>
            {Operators}
        </div>
    );
}

export default Operators;