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
      fontSize: 25,
      fontWeight: FONT.bold,
      marginBottom: SIZES.medium,
      marginTop: SIZES.medium,
      fontWeight: 'bold',
      color: COLORS.primary,
      textDecorationLine: 'underline',
    },
    flatListContent: {
      paddingBottom: 20,
    },
    itemsContainer: {
      padding: SIZES.small,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small,
      marginBottom: SIZES.small,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
    itemsText: {
      fontSize: SIZES.medium,
    },
    createButton: {
      width: 300,
      height: 50,
      padding: 15,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
      marginLeft: 10,
    },
    createButtonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles;