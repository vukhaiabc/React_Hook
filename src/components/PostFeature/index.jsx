import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostFiltesForm from './PostFiltersForm';
import PostList from './PostList';
import Pagination from './Pagination';
import queryString from 'query-string'

PostFeature.propTypes = {

};

function PostFeature(props) {
    const [postList,setPostList] = useState([])
  const [pagination,setPagination] = useState({
    _page : 1,
    _limit : 10,
    _totalRows : 15,
  })
  const [filters,setFilters] = useState({
    _page : 1,
    _limit : 10,
  })
  useEffect(()=>{
    async function fetchPostApi(){
      try {
        const paramsString = queryString.stringify(filters);
        const postApi = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const res = await fetch(postApi)
        const resJSON = await res.json()
        const {data,pagination} = resJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log(error)
      }    
    }
    fetchPostApi()
  },[filters])
  function handlePageChange(new_page){
    setFilters({
      ...filters,
      _page : new_page
    })
  }
  function handleFiltersChange(new_filter){
    // console.log(new_filter.searchTerm)
    setFilters({
      ...filters,
      _page : 1,
      title_like : new_filter.searchTerm,
    })
  }
    return (
        <div>
            <PostFiltesForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onChangePage={handlePageChange} />
        </div>
    );
}

export default PostFeature;