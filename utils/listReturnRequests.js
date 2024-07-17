import api from '../api/api';
import getAuthToken from './getAuthToken';

export const listReturnRequests = async (pharmacyId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/returnrequests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('list return requests: ', response.data);

      return response.data.content;
    } catch (error) {
      console.error('Error fetching return requests:', error);
    }
  };