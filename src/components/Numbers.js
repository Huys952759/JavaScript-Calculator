import React from 'react';

const numbers = [
                    {number: 0, id: 'zero'},
                    {number: 1, id: 'one'},
                    {number: 2, id: 'two'},
                    {number: 3, id: 'three'},
                    {number: 4, id: 'four'},
                    {number: 5, id: 'five'},
                    {number: 6, id: 'six'},
                    {number: 7, id: 'seven'},
                    {number: 8, id: 'eight'},
                    {number: 9, id: 'nine'}
    
                ];

function Numbers(props) {
    const Number = numbers.map((numberObj, i) => <div key = {i}
                                                   onClick = {props.handleClick}
                                                   className = 'number'
                                                   id = {numberObj.id}
                                                    
                                                   >   
                                                   {numberObj.number}
                                            </div>)
    return (
        <div id = 'numbers'>
           {Number} 
        </div>
    );
}

export default Numbers;