import React, { Suspense } from "react";
import { Text } from "react-native";

const MoviesData = React.lazy(() => import("./moviesListWithDate"));

const Movies: React.FC = () => {
  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <MoviesData />
    </Suspense>
  );
};

export default Movies;
