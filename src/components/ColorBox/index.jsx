import React, { useState } from 'react';
import './ColorBox.css'
ColorBox.propTypes = {
    
};
function getRandomColor(){
    const LIST_COLOR = ['red','green','blue','yellow','black']
    let indexRandom = Math.trunc(Math.random()*5)
    return LIST_COLOR[indexRandom]
}
function ColorBox() {
    
    const [color,setColor] = useState(()=>{
        return localStorage.getItem('color') || 'red'    
    })
    function handleBoxClick(){
        let newColor = getRandomColor()
        setColor(newColor);
        localStorage.setItem('color',newColor);
    }
    return (
        <div className='color-box'
        style = {{backgroundColor:color}}
        onClick = {handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;