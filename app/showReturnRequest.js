import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import ReturnRequest from './returnRequest';
import styles from './showReturnRequest.styles';

import api from '../api/api';
import { useNavigation } from '@react-navigation/native';
import { getAuthToken } from './utile';

 const ShowReturnRequests = () => {

  const [returnRequestContent, setReturnRequestContent] = useState([]);

  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState('');

  const navigation = useNavigation();
  

  const listReturnRequests = async () => {
    console.log('pharmacy id for show return requests screen: ', selectedPharmacy);
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await api.get(`/pharmacies/${selectedPharmacy}/returnrequests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      

      setReturnRequestContent(response.data.content);
      console.log('list return requests: ', returnRequestContent);
      return response.data.content;
    } catch (error) {
      console.error('Error fetching return requests:', error);
    }
  };

  useEffect(() => {
    const fetchPharmacies = async () => {
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
        
        setPharmacies(response.data);
      } catch (error) {
        console.error('Error fetching pharmacies:', error);
      }
    };

    fetchPharmacies();
  }, []);

  const handleCreateRequest = () => {
    navigation.navigate('createReturnRequest', { pharmacyId: selectedPharmacy });
  }

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Pharmacy:</Text>
        <SelectList
          boxStyles={styles.dropdown}
          setSelected={setSelectedPharmacy}
          data={pharmacies.map(pharmacy => ({
            key: pharmacy.pharmacyId,
            value: pharmacy.doingBusinessAs,
          }))}
          onSelect={listReturnRequests}
          placeholder={"Select Pharmacy"}
          searchPlaceholder="Search..."
        />
        
        <Text style={styles.title}>      Return Requests:</Text>
        {returnRequestContent.length > 0 ? (
          <FlatList
            data={returnRequestContent}
            keyExtractor={(item) => item.returnRequest.id.toString()}
            renderItem={({ item }) => <ReturnRequest request={item.returnRequest} pharmacyId={selectedPharmacy}/>}
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
