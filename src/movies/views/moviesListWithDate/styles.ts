import { StyleSheet } from "react-native";

const useStyles = () =>
  StyleSheet.create({
    releaseDate: {
      // fontFamily: "Archivo",
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 5,
      color: "#FFFFFF",
      marginLeft: 5,
      marginTop: 20,
    },
    container: {
      paddingBottom: 15,
    },
  });

export default useStyles;
