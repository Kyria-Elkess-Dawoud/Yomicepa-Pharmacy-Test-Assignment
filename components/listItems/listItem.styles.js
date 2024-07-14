import { COLORS, FONT, SIZES } from "../../constants";

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
      fontWeight: FONT.bold,
      marginBottom: SIZES.medium,
    },
    createButton: {
      backgroundColor: COLORS.pastelBlue,
      padding: SIZES.small,
      borderRadius: SIZES.small,
      marginBottom: SIZES.medium,
    },
    createButtonText: {
      color: COLORS.white,
      textAlign: 'center',
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
  });

  export default styles;