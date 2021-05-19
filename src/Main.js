import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
import Pyorat from "./Pyorat";
import Json from "./Json";
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              <li><NavLink to="/tarina">Tarinaa</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
              <li><NavLink to="/pyorat">Pyörät</NavLink></li>
              <li><NavLink to="/json">Json</NavLink></li>
              

            </ul>
            <div className="content">
              <Route exact path="/" component={Koti}/>
              <Route path="/tarina" component={Tarina}/>
              <Route path="/yhteys" component={Yhteys}/>
              <Route path="/pyorat" component={Pyorat}/>
              <Route path="/json" component={Json}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;


