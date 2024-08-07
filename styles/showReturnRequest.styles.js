import { COLORS, FONT, SIZES } from "../constants";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: COLORS.pastelBlue,
    },
    title: {
      fontSize: 25,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      marginBottom: SIZES.medium,
      marginTop: SIZES.medium,
      color: COLORS.primary,
      marginLeft: 80,
    },
    createButton: {
      width: 300,
      height: 50,
      padding: 15,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
      marginLeft: 70,
    },
    createButtonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    label: {
      width: "500%",
      fontSize: 18,
      marginBottom: 20,
      marginTop: 5,
      fontWeight: 'bold',
    },
  });

  export default styles;