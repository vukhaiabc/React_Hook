import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

PostFiltesForm.propTypes = {
    onSubmit : PropTypes.func,
};
PostFiltesForm.defaultProps = {
    onSubmit : null,
};

function PostFiltesForm(props) {
    const {onSubmit} = props
    const [searchTerm,setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)
    function handleChange(e){
        const value = e.target.value;
        setSearchTerm(value)
        if(!onSubmit) return ;
        
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(()=>{
            const formValues = {
                searchTerm : value,
            }
            onSubmit(formValues)
        },300)
    }
    return (
        <form>
            <input type="text" 
            value = {searchTerm}
            onChange = {handleChange}
            />
        </form>
    );
}

export default PostFiltesForm;