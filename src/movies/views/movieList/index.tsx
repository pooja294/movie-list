import React from "react";
import { FlatList, Text } from "react-native";

import MovieCard from "../../components/movieCard";

import { IMovieListResults } from "../../models/movieList";

interface IMovieListProps {
  data: Array<IMovieListResults>;
  releaseDate: string;
}

const MovieList: React.FC<IMovieListProps> = (props) => {
  const renderMovieCard = (item: IMovieListResults) => (
    <MovieCard
      title={item.title}
      rating={item.popularity}
      imageUrl={item.posterPath}
    />
  );

  const renderFlatlist = () => (
    <FlatList
      data={props.data}
      keyExtractor={(item: IMovieListResults) => `${item?.id}`}
      renderItem={(item: { item: IMovieListResults }) =>
        renderMovieCard(item.item)
      }
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  );

  return <>{renderFlatlist()}</>;
};

export default MovieList;
