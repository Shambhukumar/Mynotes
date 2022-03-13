import { useState } from 'react';
import './App.scss';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';

const App =()=> {
 
  return (
    <div className="App">
      <SideBar/>
     <Home/>
    </div>
  );
}

export default App;
