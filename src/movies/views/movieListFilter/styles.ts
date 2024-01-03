import { StyleSheet } from "react-native";

const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#242424",
      justifyContent: "center",
      alignContent: "center",
    },
    itemContainer: {
      marginLeft: 12,
      marginVertical: 15,
    },
    itemStyle: {
      backgroundColor: "#484848",
      borderRadius: 4,
      paddingHorizontal: 12,
      paddingVertical: 6,
      height: 32,
    },
    selectedItemStyle: {
      backgroundColor: "#F0283C",
    },
    labelStyle: {
      // fontFamily: "Saira",
      fontWeight: "400",
      fontSize: 14,
      color: "#F5F5F5",
    },
    selectedLabelStyle: {
      fontWeight: "600",
    },
    flatlistContainer: {
      paddingRight: 15,
    },
  });

export default useStyles;
