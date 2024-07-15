import api from "../api/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getBearerToken = async (usernameString, passwordString) => {
    const url = '/auth';
    const credentials = {
      username: usernameString,
      password: passwordString
    };

    try {
      const response = await api.post(url, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const accessToken = response.data.token;
        console.log('Access Token:', accessToken);
        await AsyncStorage.setItem('accessToken', accessToken); // Store token
        return accessToken;
      } else {
        console.error('Login failed:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  export default getBearerToken;