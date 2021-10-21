import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination : PropTypes.object.isRequired,
    onChangePage : PropTypes.func,
};
Pagination.defaultProps = {
    onChangePage : null,
};

function Pagination(props) {
    const {pagination,onChangePage} = props
    const {_page, _limit , _totalRows} = pagination
    const totalPages = Math.ceil(_totalRows / _limit)
    function handleClick(new_page){
        console.log(new_page)
        if(onChangePage){
            onChangePage(new_page)
        }
    }
    return (
        <div className='change-page'>
            <button className='prev-page'
            disabled = {_page <= 1}
            onClick = {() => handleClick(_page - 1)}
            >Prev
            </button>
            <button className='next-page'
            disabled = {_page >= totalPages}
            onClick = {() => handleClick(_page + 1)}
            >Next
            </button>
        </div>
    );
}

export default Pagination;