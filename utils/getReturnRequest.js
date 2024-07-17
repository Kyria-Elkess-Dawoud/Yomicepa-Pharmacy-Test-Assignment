import api from '../api/api';
import getAuthToken from './getAuthToken';

export const getReturnRequest = async (pharmacyId, returnRequestId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('get return request info: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching return request:', error);
    }
  };