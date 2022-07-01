import axios from "axios"
import Navbar from './comp/Navbar';
import Main from './comp/Main';
import Play from './comp/Play';
import Create from './comp/Create';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {dataContext} from "./helper/dataContext"
import {teamContext} from "./helper/teamContext"
import {modalContext} from "./helper/modalContext"
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    async function authorizeToken() {
      try {
        let res = await axios.get("http://localhost:3001/auth/", {headers: {bearer: localStorage.getItem("token")}});
        localStorage.setItem("token", res.data.token)
      } catch (error) {
        console.error(error.response)
      }
    }
    authorizeToken()
  }, [])
  
  let [data, setData] = useState([])
  let [modal, setModal] = useState({show: false,question: "",answer: ""})
  let [team, setTeam] = useState([])


  return (
    <Router>
      <dataContext.Provider value={{data, setData}}>
        <teamContext.Provider value={{team, setTeam}}>
          <modalContext.Provider value={{modal, setModal}}>
          <div className="App">
            <Switch>

              <Route exact path="/"> 
                <Navbar />
                <Main />
              </Route>

              {/*show login/register tab in sidenav if token not authorized, 
              conditional rendering in dashboardjs to see if token is valid.
              */}
              <Route exact path="/dashboard/create">
                
                <Play />
              </Route>

              <Route exact path="/dashboard/myprojects">

              </Route>

              <Route exact path="/dashboard/join">

              </Route>
              
              <Route exact path="/dashboard/tiers">

              </Route>

              <Route exact path="/dashboard/settings">

              </Route>

              <Route exact path="/login">

              </Route>

              <Route exact path="/register">
                
              </Route>

              <Route exact path="*">
                {/* 404 no match*/}
              </Route>

            </Switch>
          </div>
          </modalContext.Provider>
        </teamContext.Provider>
      </dataContext.Provider>
    </Router>
  );
}

export default App;
