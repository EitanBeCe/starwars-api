// // Saved to train .then() approach in App.js

// import React, { useCallback, useEffect, useState } from "react";

// import MoviesList from "./components/Movies/MoviesList";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   const fetchMoviesHandler = useCallback(() => {
//     setIsLoading(true);
//     setErr(null);

//     fetch("https://swapi.dev/api/films/")
//       .then((response) => {
//         if (!response.ok) throw new Error("Somthing went wrong");
//         return response.json();
//       })
//       .then((data) => {
//         setMovies(
//           data.results.map((movieData) => {
//             return {
//               id: movieData.episode_id,
//               title: movieData.title,
//               openingText: movieData.opening_crawl,
//               releaseDate: movieData.release_date,
//             };
//           })
//         );
//       })
//       .catch((error) => setErr(error.message));

//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);

//   let content = "No films found";
//   if (movies.length > 0) content = <MoviesList movies={movies} />;
//   if (err) content = <p>{err}</p>;
//   if (isLoading) content = <p>Loading...</p>;

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }

// export default App;
