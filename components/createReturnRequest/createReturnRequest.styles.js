import { COLORS } from '../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.white,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    placeholderStyle: {
      height: 50,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: COLORS.gray,
      borderRadius: 5,
    },
    button: {
      backgroundColor: COLORS.primary,
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default styles;