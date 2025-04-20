export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query }: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?queryt=${encodeURIComponent(query)}`
    
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }
    const data = await response.json();

    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWU2Mzg4ZTNhMmYxZDM1OTAwNzdlYTljOTc3Mzc2MyIsIm5iZiI6MTc0NTE1OTg2OS41MjQ5OTk5LCJzdWIiOiI2ODA1MDZiZDA1OWZiY2VjZjZhYTk1N2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Nt-lmGr2hTZAS_DKEqENEEdj__V9v6v3kY4UHg1bqZY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));