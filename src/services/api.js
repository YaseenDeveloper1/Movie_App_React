const Api_Key = "e4ef343e47c3ecd08d71cb14d7aceaa3";
const Base_Url = "https://api.themoviedb.org/3";

export const getPopularMovies = async () =>{
    
        const response = await fetch(`${Base_Url}/movie/popular?api_key=${Api_Key}`);
        const data = await response.json();
        return data.results
   
};
   // Searching movie
export const getSearchResults = async (query) =>{
    
        const response = await fetch(`${Base_Url}/search/movie?api_key=${Api_Key}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results
   
};