import '../css/Favorites.css'
import { useFavoriteContext } from '../contexts/FavoriteContext'
import MovieCard from '../components/MovieCard'
function Favorites(){
    const { favorites } = useFavoriteContext();
    if(favorites.length === 0){
        return <div className="favorites-empty">
 <h2>No Favorites yet!</h2>
 <p>Add movies to your favorites to see them here.</p>

    </div>
}
return (
    <div className="favorites-container">
        <h2>Your Favorite Movies</h2>
        <div className="favorites-grid">
            {favorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
)
}
export default Favorites