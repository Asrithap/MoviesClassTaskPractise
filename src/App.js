import './App.css';
import React from "react";
import { ColorList } from './ColorList';
import { MoviesList } from './MoviesList';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <MoviesList/>
      {/* <ColorList/> */}
    </div>      
  )
}

export default App;
