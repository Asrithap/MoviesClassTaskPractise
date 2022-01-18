import { useState } from "react";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movies } from "./Movies";

export function MoviesList() {
  const movienames = [
    {
      name: "Interstellar",
      poster: "https://tse3.mm.bing.net/th?id=OIP.whNlFWQEy6jWw2N1Wc8wHAHaLk&pid=Api&P=0&w=118&h=184",
      ratings: 8.6,
      summary: `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`
    },
    {
      name: "Bahubali",
      poster: "https://tse4.mm.bing.net/th?id=OIP.K9a3eHMDAQvc6-Cka4X0bgHaEK&pid=Api&P=0&w=346&h=194",
      ratings: 8.3,
      summary: `In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy.`
    },
    {
      name: "My love from the star",
      poster: "https://6.vikiplatform.com/image/3555c1be8b674894a2fbc24534e789e6.jpeg?x=b",
      ratings: 9.6,
      summary: `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`
    },
    {
      name: "Coco",
      poster: "https://tse4.mm.bing.net/th?id=OIP.QoTRWtt8zLYgb1MMq-baLgHaEK&pid=Api&P=0&w=339&h=191",
      ratings: 9.3,
      summary: `Accompanied by a charming trickster, a young musician embarks on an extraordinary journey through the colorful Land of the Dead to unlock the real story behind his family's history. `
    },
    {
      name: "Moana",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46DTO5UY_D4pJf_SsteJkHlvz0IW3aOhuVg&usqp=CAU",
      ratings: 9.0,
      summary: `Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod`
    }
  ];

  const [intialMovies, setinitialMovies] = useState(movienames);

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

  const addmovies = () => {
    console.log({ name, poster, rating, summary });
    const newMovies = { name, poster, rating, summary };
    setinitialMovies([...intialMovies, newMovies]);
    resetMovieForm();
  };


  return (
    <section>
      <div className="add-movies-form">
        <TextField value={name} label="Enter movie name" variant="outlined" onChange={(event) => setname(event.target.value)} />
        <TextField value={poster} label="Enter movie poster" variant="outlined" onChange={(event) => setposter(event.target.value)} />
        <TextField value={rating} label="Enter movie rating" variant="outlined" onChange={(event) => setrating(event.target.value)} />
        <TextField value={summary} label="Enter movie summary" variant="outlined" onChange={(event) => setsummary(event.target.value)} />
        {/* <input  value={name} placeholder='Enter movie name' onChange={(event)=>setname(event.target.value)}/>
            <input  value={poster} placeholder='Enter movie poster' onChange={(event)=>setposter(event.target.value)}/>
            <input  value={rating} placeholder='Enter movie rating' onChange={(event)=>setrating(event.target.value)}/>
            <input  value={summary} placeholder='Enter movie summary' onChange={(event)=>setsummary(event.target.value)}/> */}
        <Button variant="contained" className="add-movies-button" onClick={addmovies}>Add Movies</Button>

      </div>
      <div className="movie-list">
        {intialMovies.map((mv, index) => <Movies key={index} name={mv.name} poster={mv.poster} ratings={mv.ratings} summary={mv.summary} />)}
      </div>
    </section>
  );
}
