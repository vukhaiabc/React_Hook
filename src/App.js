import { useEffect, useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import queryString from 'query-string'
import PostFiltesForm from './components/PostFiltersForm';
import UploadAvatar from './components/UploadAvatar';
import ContentLesson from './components/ContentLesson';

function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'Quang Khai PTIT ! 🚀 ' },
    ])
  function handleToDoClick(todo){
    const indexTodo = todoList.findIndex(item => item.id === todo.id)
    if(indexTodo < 0) {
      return;
    }
    const newTodoList = [...todoList]
    newTodoList.splice(indexTodo,1)
    setTodoList(newTodoList)
  }
  function handleFormSubmit(formValues){
    const newTodoList = [...todoList]
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

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
    <div className="App">
      <h1>Quang Khai ptit</h1>
      <UploadAvatar />
      <ContentLesson />
      <PostFiltesForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination= {pagination} onChangePage={handlePageChange} />
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleToDoClick} /> */}
    </div>
  );
}

export default App;
