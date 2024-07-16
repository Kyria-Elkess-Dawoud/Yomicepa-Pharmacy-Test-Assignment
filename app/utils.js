import api from '../api/api';
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
