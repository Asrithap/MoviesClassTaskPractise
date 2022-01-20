import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export function AddMovies({Movies,setMovies})
{
    const [name, setname] = useState("");
    const [poster, setposter] = useState("");
    const [rating, setrating] = useState("");
    const [summary, setsummary] = useState("");
  
    const resetMovieForm = () => {
      setname("");
      setposter("");
      setrating("");
      setsummary("");
    };
  
    //Main Logic
    const addmovies = () => {
      console.log({ name, poster, rating, summary });
      const newMovie = { name, poster, rating, summary };
      setMovies([...Movies, newMovie]);
      resetMovieForm();
    };

    return(
        <div className="add-movies-form">
        <TextField value={name} label="Enter movie name" variant="outlined" onChange={(event) => setname(event.target.value)} />
        <TextField value={poster} label="Enter movie poster" variant="outlined" onChange={(event) => setposter(event.target.value)} />
        <TextField value={rating} label="Enter movie rating" variant="outlined" onChange={(event) => setrating(event.target.value)} />
        <TextField value={summary} label="Enter movie summary" variant="outlined" onChange={(event)=>setsummary(event.target.value)}/>
        <Button variant="contained" className="add-movies-button" onClick={addmovies}>Add Movies</Button>
      </div>
    );
}