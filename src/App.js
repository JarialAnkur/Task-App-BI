import React ,{Component} from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import Front from './components/front';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/listtask';
import Navbar1 from "./components/navbar";


class App extends Component {
  render(){

  
  return (
    
    <div className="container">
      <Navbar1 />
    <div className="App">
      
      <Switch>
      <Route exact path="/add" component={Front}/>
      <Route exact path="/alltask" component={List}/>
      <Redirect to="/alltask"/>
      </Switch>
    
    </div>
    </div>
  );
  }
}

export default App;
