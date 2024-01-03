import React from "react";
import { View, Text, Image } from "react-native";

import FastImage from "react-native-fast-image";

import useStyles from "./styles";

interface IMovieCardProps {
  imageUrl: string;
  title: string;
  rating: number;
}

const MovieCard: React.FC<IMovieCardProps> = (props) => {
  const styles = useStyles();

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageContainer}
        source={{ uri: props?.imageUrl || "" }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.innerContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {props?.title || ""}
        </Text>
        <Text numberOfLines={1} style={styles.rating}>
          {props?.rating || ""}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;
