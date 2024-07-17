import api from '../api/api';
import getAuthToken from './getAuthToken';

export const listPharmacies = async () => {
  try {
    const token = await getAuthToken();
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await api.get('/pharmacies/management', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('list pharmacies info : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching pharmacies:', error);
  }
};