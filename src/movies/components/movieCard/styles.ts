import { StyleSheet } from "react-native";

const useStyles = () =>
  StyleSheet.create({
    cardContainer: {
      width: 190,
      height: 222,
      backgroundColor: "#424242",
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 5,
    },
    imageContainer: {
      width: 190,
      height: 222,
    },
    innerContainer: {
      zIndex: 10,
      position: "absolute",
      bottom: 10,
      marginHorizontal: 8,
    },
    title: {
      // fontFamily: 'Archivo',
      fontSize: 14,
      fontWeight: "600",
      color: "#FFFFFF",
    },
    rating: {
      // fontFamily: 'Archivo',
      fontSize: 8,
      fontWeight: "600",
      color: "#FFFFFF",
    },
  });

export default useStyles;
