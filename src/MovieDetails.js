import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useHistory } from "react-router-dom";
import { Counter } from './Counter';


export function MovieDetails({ name, poster, rating, summary,id }) 
{
  const [show, setShow] = useState(true);
  //Conditional styling
  const styles = { display: show ? "block" : "none" };
  const history = useHistory(); //another hook similar to useState

  return (
    <Card className="movie-container">
      
        <img className="movie-poster" src={poster} alt={name}/>
        <CardContent>
          <div className="movie-specs">
            <h3 className="movie-name">
              {name}
                <IconButton onClick={()=>history.push("/movies"+id)} color ="primary" aria-label="Movie Details"> 
                  <InfoIcon/> 
                </IconButton>
                <IconButton className="movie-show-button" onClick={() => setShow(!show)} color="primary" aria-label= {show ? "Hide" : "Show"}>
                  {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </IconButton>
            </h3>
            <p className="movie-ratings">⭐{rating}</p>
          </div>
          {/* converted below button to IconButton */}
          {/* <button onClick={() => setShow(!show)} className="movie-show-name"> {show ? "Hide" : "Show"} Description</button> */}
          <p style={styles}>{summary}</p>

          {/* Conditinal Rendering */}
          {/* {show ? <p>{summary}</p> : ""}; */}

        </CardContent>
        <CardActions>
           <Counter />
        </CardActions>
    </Card>
  );
}
