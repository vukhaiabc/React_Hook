import React, { useEffect, useState } from 'react';
import useClock from '../../Hooks/useClock';


function Clock() {
    const {time} = useClock()
    const [showClock, setShowClock] = useState(false)
    
    return (
        <div className='Clock'>
            <button onClick={() => setShowClock(!showClock)}>Xem Đồng Hồ</button>
            {showClock && <h1>{time}</h1>}
        </div>
    );
}

export default Clock;