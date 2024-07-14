import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: '150%',
    height: '40%',
    flexDirection: 'row',
    padding: 10,
    marginBottom: -30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
    backgroundColor: COLORS.gray2,
  },
  icon: {
    width: '20%',
    height: '100%',
    marginBottom: 20,
    borderWidth: 2,
    marginLeft: -7,
    borderColor: COLORS.gray,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    color: COLORS.navyBlue
  },
});

export default styles;