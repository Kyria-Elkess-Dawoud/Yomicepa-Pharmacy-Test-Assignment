import { COLORS, FONT, SIZES } from "../constants";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.pastelBlue,
    },
    title: {
      fontSize: 24,
      textDecorationLine: 'underline',
      fontWeight: FONT.bold,
      marginBottom: SIZES.medium,
    },
    createButton: {
      width: 300,
      height: 50,
      padding: 15,
      backgroundColor: COLORS.lightBlue,
      borderRadius: 5,
      alignItems: 'center',
    },
    createButtonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    flatListContent: {
      paddingBottom: 20,
    },
    returnRequestContainer: {
      padding: SIZES.small,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small,
      marginBottom: SIZES.small,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
    returnRequestText: {
      fontSize: SIZES.medium,
    },
    text: {
      fontSize: 12,
      color: COLORS.purple,
      marginBottom: 5,
    },
  });

  export default styles;