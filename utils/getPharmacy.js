import api from '../api/api';
import getAuthToken from './getAuthToken';

export const getPharmacy = async (pharmacyId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/full`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('get pharmacy info : ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching pharmacy:', error);
    }
};