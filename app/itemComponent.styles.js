import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 170,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
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
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    color: COLORS.navyBlue,
  },
  deleteButton: {
    width: '20%',
    height: '25%',
    //flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  deleteButtonText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: COLORS.white,
  },
  editButton: {
    width: '20%',
    height: '25%',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: COLORS.white,
  },
});

export default styles;