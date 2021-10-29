import { useEffect, useState } from 'react';


function handleTimer(now) {
    const hh = `0${now.getHours()}`.slice(-2)
    const mm = `0${now.getMinutes()}`.slice(-2)
    const ss = `0${now.getSeconds()}`.slice(-2)
    return `${hh} : ${mm} : ${ss}`
}
function useClock() {
    const [time, setTime] = useState()
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const current = handleTimer(now)
            setTime(current)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return {time}
}

export default useClock;