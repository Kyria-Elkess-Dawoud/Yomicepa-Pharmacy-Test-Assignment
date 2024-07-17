import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 170,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  imageContainer: {
    width: '27%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -5,
  },
  image: {
    width: '100%',
    height: '100%',
    //resizeMode: 'contain'
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
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    top: 4,
    right: 5,
  },
  editIcon: {
    marginLeft: 5,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  saveButton: {
    backgroundColor: COLORS.navyBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;