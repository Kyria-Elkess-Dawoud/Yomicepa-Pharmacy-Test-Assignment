import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReturnRequest from './returnRequest';
import styles from './showReturnRequest.styles';
import axios from 'axios';
import api from '../api/api';
import { useNavigation } from '@react-navigation/native';

 const ShowReturnRequests = () => {

  const [returnRequestsInfo, setReturnRequestsInfo] = useState([]);
  const [returnRequestContent, setReturnRequestContent] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [getPharmacyInfo, setGetPharmacyInfo] = useState([]);
  const [wholesalersForPharmacy, setWholesalersForPharmacy] = useState([]);

  const navigation = useNavigation();

  const getAuthToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('show token:', accessToken);
      return accessToken;
    } catch (error) {
      console.error('Error retrieving access token:', error);
      return null;
    }
  };

  const listPharmacies = async () => {
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
  
      setPharmacies(response.data)
      console.log('list pharmacies info : ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching return requests:', error);
    }
  };

  const getPharmacy = async (pharmacyId) => {
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
  
      setGetPharmacyInfo(response.data)
      console.log('get pharmacy info : ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching pharmacy:', error);
    }
  };

  const listWholesalersForPharmacy = async (pharmacyId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/wholesalers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setWholesalersForPharmacy(response.data)
      console.log('wholesalers for pharmacy : ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching wholesalers for pharmacy:', error);
    }
  };


  const listReturnRequests = async (pharmacyId) => {
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
  
      setReturnRequestsInfo(response.data);
      console.log('list return requests: ', response.data);

      setReturnRequestContent(response.data.content);
      //console.log('Return Request IDs:', returnRequestIds[0]);
      return response.data.content;
    } catch (error) {
      console.error('Error fetching return requests:', error);
    }
  };

  const createReturnRequest = async (pharmacyId, wholesalerId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const requestBody = {
        serviceType: "EXPRESS_SERVICE",
        wholesalerId: wholesalerId,
      };
  
      const response = await api.post(`/pharmacies/${pharmacyId}/returnrequests`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      console.log('create return request info: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating return request:', error);
    }
  };

  const getReturnRequest = async (pharmacyId, returnRequestId) => {
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

  //error
  // const addItemToReturnRequest = async (pharmacyId, returnRequestId, itemData) => {
  //   try {
  //     const token = await getAuthToken();
  //     if (!token) {
  //       throw new Error('No access token found');
  //     }
  
  //     console.log('Adding item to return request with token:', token);
  //     const response = await api.post(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items`, itemData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  
  //     console.log('add item to return request: ', response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error adding item to return request:', error);
  //   }
  // };

  const updateItemInReturnRequest = async (pharmacyId, returnRequestId, itemId, updatedItemData) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.put(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items/${itemId}`, updatedItemData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      console.log('update item in return request: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating item in return request:', error);
    }
  };

  const getItemInReturnRequest = async (pharmacyId, returnRequestId, itemId) => {
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

  const listItemsInReturnRequest = async (pharmacyId, returnRequestId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log(' list items in return request: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching items in return request:', error);
    }
  };

  const deleteItemInReturnRequest = async (pharmacyId, returnRequestId, itemId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.delete(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('delete item in return request', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting item in return request:', error);
    }
  };

  useEffect(() => {
     listPharmacies()
  }, []);

  useEffect(() => {
    if (pharmacies.length > 0) {
      const pharmacyId = pharmacies[0].pharmacyId;
      console.log('pharmacy id: ' ,pharmacyId)
      listReturnRequests(pharmacyId);
      getPharmacy(pharmacyId);
      listWholesalersForPharmacy(pharmacyId);

      if (wholesalersForPharmacy.length > 0) {
        const wholesalerId = wholesalersForPharmacy[0].id;
        createReturnRequest(pharmacyId, wholesalerId);

        if (returnRequestContent.length > 0) {
          console.log('Return Request IDs:', returnRequestContent[0].returnRequest.id);
          const returnRequestId = returnRequestContent[0].returnRequest.id;//.id
          getReturnRequest(pharmacyId, returnRequestId);
        }
      }

      //el user hyd5lha f add item screen
      // const itemData = {
      //   ndc: "8040-4444-333",
      //   description: "This is a new drug",
      //   manufacturer: "Nicolas LLC",
      //   packageSize: "200",
      //   requestType: "csc",
      //   name: "Best Item Name",
      //   strength: "strong",
      //   dosage: "alssot",
      //   fullQuantity: "500",
      //   partialQuantity: "100",
      //   expirationDate: "2021-08",
      //   status: "PENDING",
      //   lotNumber: "1231313"
      // };
      // addItemToReturnRequest(pharmacyId, returnRequestId, itemData);

    }
  }, [pharmacies]);


  const handleCreateRequest = () => {
    navigation.navigate('createReturnRequest');
  }

   //da 7lw

    //  return (
    //     <View style={styles.container}>
    //       <FlatList
    //         data={returnRequests}
    //         keyExtractor={item => item.id}
    //         renderItem={({ item }) => <ReturnRequest request={item} />}
    //         contentContainerStyle={{ paddingBottom: 1 }}
    //       />

          // <TouchableOpacity style={styles.createButton} onPress={() => handleCreateRequest()}>
          //   <Text style={styles.createButtonText}>Create Return Request</Text>
          // </TouchableOpacity>
    //     </View>
    // );

    return (
      <View style={styles.container}>
        {/* Render pharmacies data */}
        <Text style={styles.title}>Pharmacies</Text>
        <FlatList
          data={pharmacies}
          keyExtractor={(item) => item.pharmacyId.toString()}
          renderItem={({ item }) => (
            <Text style={styles.text}>
              {item.doingBusinessAs} (ID: {item.pharmacyId})
            </Text>
          )}
        />
  
        {/* Render returnRequests data */}
        <Text style={styles.title}>Return Requests</Text>
        {returnRequestContent.length > 0 ? (
          <FlatList
            data={returnRequestContent}
            keyExtractor={(item) => item.returnRequest.id.toString()}
            renderItem={({ item }) => <ReturnRequest request={item} />}
          />
        ) : (
          <Text style={styles.title}>No return requests found</Text>
        )}

        <TouchableOpacity style={styles.createButton} onPress={() => handleCreateRequest()}>
          <Text style={styles.createButtonText}>Create Return Request</Text>
        </TouchableOpacity>
      </View>
    );
  };

 export default ShowReturnRequests;
