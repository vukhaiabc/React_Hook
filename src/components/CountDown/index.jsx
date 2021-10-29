import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Hero from '../Hero';

CountDown.propTypes = {

};

function CountDown(props) {
    const [count, setCount] = useState(60)
    const preCount = useRef
    const timerId = useRef()

    useEffect(()=>{
        preCount.current = count
    },[count])
    const handleButtonStart = () => {
        timerId.current = setInterval(() => {
            setCount(preCount => preCount - 1)
        }, 1000)
    }
    const handleButtonStop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-start'
                onClick={handleButtonStart}
            >Start</button>
            <button className='btn btn-stop'
                onClick={handleButtonStop}
            >Stop</button>
            <Hero name= 'Quang Khải' />
        </div>
    );
}

export default CountDown;