import { MovieDetails } from "./MovieDetails";

export function MoviesList({Movies}) 
{
  return (
    <section>
      <div className="movie-list">
        {Movies.map((mv, index) => (<MovieDetails key={index} name={mv.name} poster={mv.poster} rating={mv.rating} summary={mv.summary} id={index} />))}
      </div>
    </section>
  );
}
