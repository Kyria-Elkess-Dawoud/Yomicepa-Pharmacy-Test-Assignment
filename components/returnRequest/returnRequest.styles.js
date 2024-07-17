import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

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
  imageContainer: {
    width: '26%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    marginLeft: -7,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    color: COLORS.black,
  },
  addButton: {
    width: '80%',
    height: '25%',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.navyBlue,
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 9,
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
    fontSize: 10,
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    position: 'absolute',
    top: 5,
    right: -10,
    width: '20%',
    height: '100%',
  },
  itemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default styles;