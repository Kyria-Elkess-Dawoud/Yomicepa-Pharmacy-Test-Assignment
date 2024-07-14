import { COLORS, FONT, SIZES } from "../../constants";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 170,
    backgroundColor: COLORS.pastelBlue,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  welcomeText: {
    width: '500%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: COLORS.black,
  },
  input: {
    width: '500%',
    padding: 10,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: COLORS.gray2,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  loginButton: {
    width: '500%',
    padding: 15,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
