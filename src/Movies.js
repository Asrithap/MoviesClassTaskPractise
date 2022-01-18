import { useState } from "react";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';


export function Movies({ name, poster, ratings, summary }) {
  const [show, setShow] = useState(true);
  const styles = { display: show ? "block" : "none" };

  return (
    <Card>
      <div className="movie-container">
        <img className="movie-poster" src={poster} alt={name}></img>
        <CardContent>
          <div className="movie-specs">
            <h3>{name}</h3>
            <p className="movie-ratings">⭐{ratings}</p>
          </div>
          <button onClick={() => setShow(!show)} className="movie-show-name"> {show ? "Hide" : "Show"} Description</button>
          <p style={styles}>{summary}</p>
          <Counter />
        </CardContent>
      </div>
    </Card>
  );

}
