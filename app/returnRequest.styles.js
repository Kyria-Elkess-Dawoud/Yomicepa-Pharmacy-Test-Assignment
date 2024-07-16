import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 160,
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
  showButton: {
    width: 45,
    height: 30,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  showButtonText: {
    fontWeight: 'bold',
    fontSize: 8,
    color: COLORS.white,
  },
  buttonContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'space-between',
  },
  itemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, // Adjust this value if needed
  },
});

export default styles;