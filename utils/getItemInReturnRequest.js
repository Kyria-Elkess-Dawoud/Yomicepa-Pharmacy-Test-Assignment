import api from '../api/api';
import getAuthToken from './getAuthToken';

export const getItemInReturnRequest = async (pharmacyId, returnRequestId, itemId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('get item in return request: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching item in return request:', error);
    }
  };