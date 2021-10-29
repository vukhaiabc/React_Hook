import { useEffect, useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';

import UploadAvatar from './components/UploadAvatar';
import ContentLesson from './components/ContentLesson';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import GetCourses from './components/GetAPI';
import CountDown from './components/CountDown';
import MagicBox from './components/MagicBox';
import { Redirect, Route, Switch } from 'react-router';
import TodoFeature from './components/Todo';
import PostFeature from './components/PostFeature';
import { NavLink } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      
      <h1>Quang Khai PTIT</h1>
      {/* <Clock /> */}
      <p><NavLink to='/upload-avatar' activeClassName='menu-item-active'>UpLoadAvatar</NavLink></p>
      <p><NavLink to='/clock' activeClassName='menu-item-active'>Clock</NavLink></p>
      <p><NavLink to='/magic-box' activeClassName='menu-item-active'>Magic-box</NavLink></p>
      <p><NavLink to='/color-box' activeClassName='menu-item-active'>Color Box</NavLink></p>
      <p><NavLink to='/count-down' activeClassName='menu-item-active'>Count Down</NavLink></p>
      <p><NavLink to='/courses' activeClassName='menu-item-active'>Courses</NavLink></p>
      <p><NavLink to='/lessons' activeClassName='menu-item-active'>Lesson</NavLink></p>
      <p><NavLink to='/todos' activeClassName='menu-item-active'>Todo</NavLink></p>
      <p><NavLink to='/post-list' activeClassName='menu-item-active'>Blog Post</NavLink></p>
      
      
      <br />
      <Switch>
        <Redirect from='/home' to='/' exact />
        <Route path='/upload-avatar' ><UploadAvatar /></Route>
        <Route path='/magic-box' ><MagicBox /></Route>
        <Route path='/color-box' ><ColorBox /></Route>
        <Route path='/count-down' ><CountDown /></Route>
        <Route path='/courses' ><GetCourses /></Route>
        <Route path='/lessons' ><ContentLesson /></Route>
        <Route path='/todos' ><TodoFeature /></Route>
        <Route path='/post-list' ><PostFeature /></Route>
        <Route path='/clock' ><BetterClock /></Route>

      </Switch>
      
      
      <h1>Footer</h1>
    </div>
  );
}

export default App;
