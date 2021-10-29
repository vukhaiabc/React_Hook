import React from 'react';
import PropTypes from 'prop-types';
import useFetchApiDjango from '../FetchAPI';

GetCourses.propTypes = {
    
};

function GetCourses(props) {
    const api = 'http://127.0.0.1:8000/api/courses/'
    const {data} = useFetchApiDjango(api)
    
    return (
        <ul className='list-course'>
            {
                data && data.results.map((item)=>(<li key={item.id}>{item.name}</li>))
            }
        </ul>
    );
}

export default GetCourses;