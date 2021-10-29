import React, { useEffect, useRef, useState } from 'react';
useMagicColor.propTypes = {
    
};
function randomIndexColor(num){
    return Math.trunc(Math.random() * num)
}
function useMagicColor(props) {
    const listColors = ['green','black','red','yellow','origin','blue']
    const [color,setColor] = useState('transparent')
    const colorRef = useRef()
    useEffect(()=>{
        const colorInterval = setInterval(()=>{
            let newColor = listColors[randomIndexColor(listColors.length)]
            while(colorRef.current === newColor){
                newColor = listColors[randomIndexColor(listColors.length)]
            }  
            
            setColor(newColor)
            colorRef.current = newColor
            
        },1000)
        return () => clearInterval(colorInterval)
    },[])
    // console.log(color,colorRef.current);
    return color
}

export default useMagicColor;