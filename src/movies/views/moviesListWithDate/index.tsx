import React, { Suspense, useEffect, useReducer, useState } from "react";
import { FlatList, Text } from "react-native";

import MovieListFilter from "../movieListFilter";
import MovieList from "../movieList";
import { data } from "./data";
import { initialMovieListState, reducer } from "../../reducer";
import useStyles from "./styles";

const MovieListWithDate: React.FC = () => {
  const styles = useStyles();

  const [moviesByYear, setMoviesByYear] = useState({});
  const [state, dispatch] = useReducer(reducer, initialMovieListState);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784
  //       d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vot
  //       e_count.gte=100`,
  //       {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization: "2dca580c2a14b55200e784d157207b4d",
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch({ type: "FETCH_SUCCESS", payload: data });
  //         const groupedMovies = data.reduce((acc, movie) => {
  //           const releaseDate = movie.release_date;
  //           const movieYear = new Date(releaseDate).getFullYear();

  //           if (!acc[movieYear]) {
  //             acc[movieYear] = [];
  //           }

  //           acc[movieYear].push(movie);

  //           return acc;
  //         }, {});

  //         Object.keys(groupedMovies).forEach((year) => {
  //           groupedMovies[year].sort(
  //             (a, b) =>
  //               new Date(a.release_date).getTime() -
  //               new Date(b.release_date).getTime()
  //           );
  //         });

  //         setMoviesByYear(groupedMovies);
  //       })
  //       .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = () => {
      const groupedMovies = data.reduce((acc, movie) => {
        const releaseDate = movie.releaseDate;
        const movieYear = new Date(releaseDate).getFullYear();

        if (!acc[movieYear]) {
          acc[movieYear] = [];
        }

        acc[movieYear].push(movie);

        return acc;
      }, {});

      Object.keys(groupedMovies).forEach((year) => {
        groupedMovies[year].sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
      });

      setMoviesByYear(groupedMovies);
    };

    fetchData();
  }, []);

  const renderMovieGroup = ({ item }) => (
    <>
      <Text style={styles.releaseDate}>{item.year}</Text>
      <MovieList data={item.movies} releaseDate={item.year.toString()} />
    </>
  );

  return (
    <>
      <MovieListFilter onSelect={() => console.log()} />
      <FlatList
        data={Object.keys(moviesByYear).map((year) => ({
          year,
          movies: moviesByYear[year],
        }))}
        keyExtractor={(item, index) => item.year + index}
        renderItem={renderMovieGroup}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default MovieListWithDate;
