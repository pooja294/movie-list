import { StatusBar } from "react-native";
import MovieListStackNav from "./src/movies/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={"#242424"} barStyle={"dark-content"} />
      <NavigationContainer>
        <MovieListStackNav />
      </NavigationContainer>
    </>
  );
}
