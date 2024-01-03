import { StyleSheet } from "react-native";

const useStyles = () =>
  StyleSheet.create({
    headerTitle: {
      color: "#F0283C",
      fontSize: 25.18,
      fontWeight: "700",
      // fontFamily: "Amaranth",
      // width: wp("100%"),
    },
    // rotatedLetterContainer: {
    //   transform: [{ rotate: `${Math.random() * 360}deg` }],
    // },
    header: {
      backgroundColor: "#242424",
    },
    card: {
      backgroundColor: "#121212",
    },
  });

export default useStyles;
