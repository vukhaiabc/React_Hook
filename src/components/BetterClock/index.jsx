import React from 'react';
import useClock from '../../Hooks/useClock';
import './styles.scss'

function BetterClock() {
    const {time} = useClock()
    return (
        <div className='better-clock'>
            <h2 className='better-clock__time'>{time}</h2>
        </div>
    );
}

export default BetterClock;