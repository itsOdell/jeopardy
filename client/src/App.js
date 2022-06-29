import Navbar from './comp/Navbar';
import Main from './comp/Main';
import Play from './comp/Play';
import Create from './comp/Create';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {dataContext} from "./helper/dataContext"
import {teamContext} from "./helper/teamContext"
import {modalContext} from "./helper/modalContext"
import { useState } from 'react';

function App() {

  let [data, setData] = useState([])
  let [modal, setModal] = useState({
    show: false,
    question: "",
    answer: ""
  })
  let [team, setTeam] = useState([
  ])

  let test = "test"

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

              <Route exact path="/create">
                <Create />
              </Route>

              <Route exact path="/play">
                <Play />
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
