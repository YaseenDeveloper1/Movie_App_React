
import '../css/MovieCard.css'
import { useFavoriteContext } from '../contexts/FavoriteContext'
function MovieCard({movie}){

    const { addFavorite, removeFavorite, isFavorite } = useFavoriteContext();

    function handleFavoriteClick(e){
       e.preventDefault();
        if(isFavorite(movie.id)){
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }
return(
    <>
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
            <button className={`favorite-btn ${isFavorite(movie.id) ? "active" : ""}`} onClick={handleFavoriteClick}> {isFavorite(movie.id) ? "❤️" : "🤍"} </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title} </h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
    </>
)

}
export default MovieCard