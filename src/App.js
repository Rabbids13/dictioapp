
import './App.css';
import {useState } from 'react'
import axios from 'axios'
// import BottomNavbar from './BottomNavbar';
import About from './About';
import Profile from './Profile';
import Fun from './Fun';
import Home from './Home';
import Detail from './detail';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

import {createBrowserHistory} from 'history'
const history = createBrowserHistory()


function App() {
  const [detail,setdetail]=useState()
  function getdata(data){
    setdetail(data)
  }

  return (
    <BrowserRouter history = {history}>
      <header>
        <h1>DictioApp</h1>
      </header>
      
      <div className="containernav">
        <Routes>
          <Route path="/" element={<Home detail={getdata}/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Fun" element={<Fun />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Detail" element={<Detail detail={detail} />}></Route>
        
          </Routes>
        <footer>
              <NavLink to="/" className="iconwrapper">
                Home
              </NavLink>
              <NavLink to="/Fun" className="iconwrapper">
                Funword
              </NavLink>
              <NavLink to="/Profile" className="iconwrapper">
                Profile
              </NavLink>
                            <NavLink to="/About" className="iconwrapper">
                About
              </NavLink> 
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
