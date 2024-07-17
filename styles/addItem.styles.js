import { COLORS } from "../constants";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.pastelBlue,
  },
  addItemText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.black,
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
  AddButton: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 5,
    alignItems: 'center',
  },
  AddButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  GoToItemsButton: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 5,
    alignItems: 'center',
  },
  GoToItemsButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
