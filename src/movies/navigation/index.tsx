import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Movies from "../views";
import useStyles from "./styles";

export type MovieScreenList = {
  MovieList: undefined;
};

const MovieListStackNav: React.FC = () => {
  const styles = useStyles();
  const Stack = createStackNavigator<MovieScreenList>();

  // const renderRotatedLetters = (word: string) => {
  //   return word.split("").map((letter, index) => (
  //     <View key={index} style={styles.rotatedLetterContainer}>
  //       <Text style={styles.headerTitle}>{letter}</Text>
  //     </View>
  //   ));
  // };

  return (
    <Stack.Navigator
      initialRouteName={"MovieList"}
      screenOptions={{
        headerShown: true,
        cardStyle: styles.card,
      }}
    >
      <Stack.Screen
        name={"MovieList"}
        component={Movies}
        options={() => ({
          headerShown: true,
          headerTitleStyle: styles.headerTitle,
          title: "MOVIEFIX",
          headerStyle: styles.header,
        })}
      />
    </Stack.Navigator>
  );
};

export default MovieListStackNav;
