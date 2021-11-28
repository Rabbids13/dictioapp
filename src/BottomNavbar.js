import './navbar.css'
import About from './About';
import Profile from './Profile';
import Fun from './Fun';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

export default function BottomNavbar(){
    return(
        <div className="navbar">
             <NavLink to="/Fun" className="iconwrapper">
              TopCoin
            </NavLink>
            <NavLink to="/Profile" className="iconwrapper">
              Market
            </NavLink>
            {/* <NavLink to="/Detail" className="iconwrapper">
              Exchange
            </NavLink> */}
            <NavLink to="/About" className="iconwrapper">
              About
            </NavLink>
            {/* <div className="navbar-wrap">
                <a ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a>
                <p>menu 1</p>
            </div>
            <div  className="navbar-wrap">
                <a><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></a>
                <p>menu 2</p>
            </div >
            <div  className="navbar-wrap">
                <a>icon(img)</a>
                <p>menu 3</p>
            </div>
            <div  className="navbar-wrap">
                <p>icon(img)</p>
                <p>menu 4</p>
            </div> */}
        </div>
    )
}