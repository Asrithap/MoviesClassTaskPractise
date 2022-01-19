import './App.css';
import React from "react";
import { ColorList } from './ColorList';
import { MoviesList } from './MoviesList';
import {Link,Switch,Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
     
      {/* <ColorList/> */}
      {/* <React_Router/> */}
      <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
        <Link to="/color">Color Game</Link>
        </li>
        
      </ul>
      </nav>
      <Switch>
  <Route path="/movies">
  <MoviesList/>
  
  </Route>
  <Route path="/color">
  <ColorList/>
  </Route>
  <Route path="/">
    <Welcome/>
  </Route>
</Switch>
      </div>      
  )
}
       {/* <MoviesList/> */}
      
function Welcome()
{
  return(
    <h2>Home, Welcome All!!!</h2>
  )
}

export default App;
