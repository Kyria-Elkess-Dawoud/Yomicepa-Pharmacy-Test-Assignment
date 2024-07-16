import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import api from '../api/api';

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './createReturnRequest.styles';
import { SelectList } from 'react-native-dropdown-select-list';
import { getAuthToken } from './utils';

const CreateReturnRequest = () => {

  const [serviceType, setServiceType] = useState('');

  const [wholesalersForPharmacy, setWholesalersForPharmacy] = useState([]);
  const [selectedWholesaler, setSelectedWholesaler] = useState('');


  const navigation = useNavigation();
  const route = useRoute();

  const { pharmacyId } = route.params;


  useEffect(() => {
    const listWholesalersForPharmacy = async () => {
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

    listWholesalersForPharmacy();
  }, []);

  const createReturnRequest = async (serviceTypeSelect, wholesalerId) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  
      const requestBody = {
        serviceType: serviceTypeSelect,
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

  const serviceTypesList = [
    {key: '1', value: 'EXPRESS_SERVICE'},
    {key: '2', value: 'FULL_SERVICE'},
  ];

  const handleSubmit = async () => {

    console.log(' pharmacy id for create return request screen:', pharmacyId);
    const response = await createReturnRequest(serviceType, selectedWholesaler);
      if (response) {
        navigation.navigate('addItem', { returnRequestId: response.id, pharmacyId: pharmacyId});
      }
      console.log('return request id create return request screen:', response.id);
  };


  return (
    <View style={styles.container}>

      <Text style={styles.label}>Service Type:</Text>
        <SelectList
            setSelected={setServiceType}
            data={serviceTypesList}
            placeholder={"Select service type"}
            searchPlaceholder="Search..."
        />

      <Text style={styles.label}>Wholesaler:</Text>
        <SelectList
            setSelected={setSelectedWholesaler}
            data={wholesalersForPharmacy.map(wholesaler => ({
              key: wholesaler.id,
              value: wholesaler.name,
            }))}
            placeholder={"Select wholesaler"}
            searchPlaceholder="Search..."
        />


      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateReturnRequest;