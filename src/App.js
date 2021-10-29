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
import { Route, Switch } from 'react-router';
import TodoFeature from './components/Todo';
import PostFeature from './components/PostFeature';

function App() {

  
  return (
    <div className="App">
      
      <h1>Quang Khai PTIT</h1>
      <h3>Đây là Home Page</h3>
      {/* <Clock /> */}
      <BetterClock />
      <Switch>
        <Route path='/upload-avatar' ><UploadAvatar /></Route>
        <Route path='/magic-box' ><MagicBox /></Route>
        <Route path='/color-box' ><ColorBox /></Route>
        <Route path='/count-down' ><CountDown /></Route>
        <Route path='/courses' ><GetCourses /></Route>
        <Route path='/lessons' ><ContentLesson /></Route>
        <Route path='/todos' ><TodoFeature /></Route>
        <Route path='/post-list' ><PostFeature /></Route>

      </Switch>
      
      
      <h1>Footer</h1>
    </div>
  );
}

export default App;
