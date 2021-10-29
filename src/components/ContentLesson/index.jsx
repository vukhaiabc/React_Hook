import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

ContentLesson.propTypes = {

};

function ContentLesson() {
    const listLessons = [
        {
            id: 1,
            title: 'HTML,CSS là gì'
        },
        {
            id: 2,
            title: 'Các thẻ HTML'
        }, {
            id: 3,
            title: 'CSS là gì ? Các thuộc tính của css'
        }

    ]
    const [lessonActive,setLessonActive] = useState(1)
    useEffect(()=>{
        const handleEvent = ({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonActive}`,handleEvent)
        return ()=>{
            window.removeEventListener(`lesson-${lessonActive}`, handleEvent)
        }
    },[lessonActive])
    
    return (
        <ul className='list-lesson'>
            {
                listLessons.map((lesson) => {
                    return (
                        <li
                            key={lesson.id} 
                            style = {lessonActive === lesson.id?{
                                color:'red',
                                cursor:'pointer'
                            }:{cursor:'pointer'}}
                            onClick = {()=>setLessonActive(lesson.id)}
                        >
                            {lesson.title}</li>
                    )
                })
            }
        </ul>
    );
}

export default ContentLesson;