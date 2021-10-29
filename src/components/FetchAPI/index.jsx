import  { useEffect, useState } from 'react';

useFetchApiDjango.propTypes = {
    
};

function useFetchApiDjango(api) {
    const [data,setData] = useState()
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(item =>setData(item))
    },[api])
    return {data}
}

export default useFetchApiDjango;