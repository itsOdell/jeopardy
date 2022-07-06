import axios from "axios"
import Navbar from './comp/Navbar';
import Main from './comp/Main';
import Play from './comp/Play';
import Social from './comp/Social';
import Create from './comp/Create';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {dataContext} from "./helper/dataContext"
import {teamContext} from "./helper/teamContext"
import {modalContext} from "./helper/modalContext"
import {authenitcatedContext} from "./helper/authenitcatedContext"
import { useState, useEffect } from 'react';

export const domain = "http://jeoplug.herokuapp.com"
function App() {
  let [auth, setAuth] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    async function authorizeToken() {
      try {
        let res = await axios.get(`${domain}/auth/authenitcate`, {headers: {bearer: localStorage.getItem("token")}});
        localStorage.setItem("token", res.data.token)
        setAuth(true)
      } catch (error) {
        console.error(error.response)
        localStorage.removeItem("token")
        setAuth(false)
      }
    }
    authorizeToken()
  }, [])
  
  let [data, setData] = useState([])
  let [modal, setModal] = useState({show: false, question: "",answer: ""})
  let [team, setTeam] = useState([])


  return (
    <Router>
      <authenitcatedContext.Provider value={{auth, setAuth}}>
      <dataContext.Provider value={{data, setData}}>
        <teamContext.Provider value={{team, setTeam}}>
          <modalContext.Provider value={{modal, setModal}}>
          <div className="App">
            <Switch>

              <Route exact path="/"> 
                <Navbar />
                <Main />
                <Social />
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

              <Route exact path="/dashboard/login">

              </Route>

              <Route exact path="*">
                {/* 404 no match*/}
              </Route>

            </Switch>
          </div>
          </modalContext.Provider>
        </teamContext.Provider>
      </dataContext.Provider>
      </authenitcatedContext.Provider>
    </Router>
  );
}

export default App;
