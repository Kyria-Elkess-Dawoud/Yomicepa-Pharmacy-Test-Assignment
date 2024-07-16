import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 140,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.darkerWhite,
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
    color: COLORS.black,
  },
  addButton: {
    width: '100%',
    height: '30%',
    //flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  itemsButton: {
    width: '70%',
    height: '30%',
    //flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: COLORS.white,
  },
  buttonContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'space-between', // To space buttons evenly
  },
});

export default styles;