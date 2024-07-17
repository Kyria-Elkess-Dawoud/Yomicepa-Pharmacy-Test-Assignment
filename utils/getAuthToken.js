import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    console.log('show token:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error retrieving access token:', error);
    return null;
  }
};