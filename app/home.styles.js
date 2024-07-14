import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.pastelBlue,
    },
    scrollView: {
        flex: 1,
        padding: 10,
    },
  
   });

export default styles;