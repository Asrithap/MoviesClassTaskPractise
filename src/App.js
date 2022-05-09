import "./App.css";
import React from "react";
import { ColorList } from "./ColorList";
import { MoviesList } from "./MoviesList";
import { Link, Switch, Route,Redirect, useParams,useHistory} from "react-router-dom";
import {AddMovies} from "./AddMovies";
import { useState } from "react";
import Button from '@mui/material/Button';

  
function App() {

    // const movienames = [
      const Initial_movies = [
        {
          name: "Interstellar",
          poster: "https://tse3.mm.bing.net/th?id=OIP.whNlFWQEy6jWw2N1Wc8wHAHaLk&pid=Api&P=0&w=118&h=184",
          rating: 8.6,
          summary: `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`,
          trailer :  "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
          name: "Bahubali",
          poster: "https://tse4.mm.bing.net/th?id=OIP.K9a3eHMDAQvc6-Cka4X0bgHaEK&pid=Api&P=0&w=346&h=194",
          rating: 8.3,
          summary: `In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy.`,
          trailer : "https://youtu.be/G62HrubdD6o",
        },
        {
          name: "My love from the star",
          poster: "https://6.vikiplatform.com/image/3555c1be8b674894a2fbc24534e789e6.jpeg?x=b",
          rating: 9.6,
          summary: `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`,
          trailer : "https://www.youtube.com/watch?v=AyQVdUxCA9E",
        },
        {
          name: "Coco",
          poster: "https://tse4.mm.bing.net/th?id=OIP.QoTRWtt8zLYgb1MMq-baLgHaEK&pid=Api&P=0&w=339&h=191",
          rating: 9.3,
          summary: `Accompanied by a charming trickster, a young musician embarks on an extraordinary journey through the colorful Land of the Dead to unlock the real story behind his family's history. `,
          trailer : "https://www.youtube.com/watch?v=AyQVdUxCA9E",
        },
        {
          name: "Moana",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46DTO5UY_D4pJf_SsteJkHlvz0IW3aOhuVg&usqp=CAU",
          rating: 9.0,
          summary: `Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod`,
          trailer : "https://www.youtube.com/watch?v=AyQVdUxCA9E",
        }
      ];
    
      const [Movies, setMovies] = useState(Initial_movies);
      const history = useHistory();
      
      
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <ColorList/> */}
      {/* <React_Router/> */}
      <Button variant="contained" className="Back_Button" onClick={()=> history.goBack()}>Back</Button>
      <Button variant="contained" className="Forward_Button" onClick={()=> history.goForward()}>Forward</Button>
      <nav>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/add">Add Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          <li>
            <Link to="/back">Back</Link>
          </li>
          <li>
            <Link to="/forward">Forward</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Welcome />
          {/* <ExtraMovieDetails Movies={Movies}/> */}
        </Route>
        {/* old path - /films, New path - /movies , redirected from /films to /movies */}
        <Route path="/films">
          <Redirect to="/movies"/>
        </Route>
        <Route path="/movies">
          <MoviesList Movies={Movies}/>
        </Route>

        <Route path="/movies/add">
          <AddMovies Movies={Movies} setMovies = {setMovies} />
        </Route>

          <Route path="/movies:id">
            <ExtraMovieDetails Movies={Movies}/>
          </Route>
        
        <Route path="/color-game">
          <ColorList />
        </Route>
        <Route path="/back">
          < BackButton/>
        </Route>
        <Route path="/forward">
          <ForwardButton />
        </Route>
        <Route path="**">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

function PageNotFound()
{
  return(
    <div>
      <h2>404 page not found</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkLzU3RXp6UgoBJdZQcJdn0VKeObcRdLS9WGMrSRkxXlkrmvdLN1dcEk3fmxdkWY5IDc&usqp=CAU" alt="404"></img>
    </div>
  )
}

function Welcome() {
  return <h2>Home, Welcome All!!!</h2>;
}


function ExtraMovieDetails({Movies})
{
 
  const {id} = useParams();//Dynamic Route using param
  const movie = Movies[id];

  console.log(id,Movies,movie);

  return(
    <div>
      <iframe width="100%" height="570" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className = "movie-detail-container">

      <div className="movie-specs">
            <h3 className="movie-name">{movie.name}</h3>
            <p className="movie-ratings">⭐{movie.rating}</p>
      </div>
          {/* converted below button to IconButton */}
          {/* <button onClick={() => setShow(!show)} className="movie-show-name"> {show ? "Hide" : "Show"} Description</button> */}
          <p>{movie.summary}</p>
          </div>
    </div>
  )
}



// function BackButton()
// {
//   return(
//     <Button variant="contained" className="Back_Button" onClick={()=> history.goBack()}>Back</Button>
    
//   )
// }



// function ForwardButton()
// {
  
//   return(
//     <Button variant="contained" className="Forward_Button" onClick={()=> history.goForward()}>Forward</Button>
    
//   )
// }

export default App;
