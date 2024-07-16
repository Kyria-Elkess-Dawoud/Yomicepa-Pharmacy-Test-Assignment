import { COLORS } from "../constants";
import { listPharmacies, getAuthToken, listReturnRequests } from './utile';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from "../api/api";

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './addItem.styles';

const AddItem = () => {

  const [ndc, setNdc] = useState('');
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [fullQuantity, setFullQuantity] = useState('');
  const [partialQuantity, setPartialQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [lotNumber, setLotNumber] = useState('');
  const [itemId, setItemId] = useState('');

  const navigation = useNavigation();

  const route = useRoute();
  const { returnRequestId, pharmacyId } = route.params;

  const addItemToReturnRequest = async (ndc, description, 
    manufacturer, fullQuantity, partialQuantity, expirationDate, lotNumber) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }

      const requestBody = { 
        description: description, 
        dosage: 'alssot', 
        expirationDate: expirationDate, 
        fullQuantity: fullQuantity, 
        lotNumber: lotNumber, 
        manufacturer: manufacturer, 
        name: 'best Item Name', 
        ndc: ndc, 
        packageSize: 200, 
        partialQuantity: partialQuantity, 
        requestType: 'csc',
        status:  'PENDING',
        strength: 'strong', 
      };

      console.log('Request Body:', requestBody);
  
      console.log('Adding item to return request with token:', token);
      const response = await api.post(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      setItemId(response.data.id);
      console.log('add item to return request response: ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding item to return request:', error);
    }
  };


  const handleAdd = async () => {

      const addedItem = await addItemToReturnRequest(ndc, description, 
        manufacturer, fullQuantity, partialQuantity, expirationDate, lotNumber);
    
      if (addedItem) {
        Alert.alert('Success', 'Item has been added successfully!');
        // Clear the form
        setNdc('');
        setDescription('');
        setManufacturer('');
        setFullQuantity('');
        setPartialQuantity('');
        setExpirationDate('');
        setLotNumber('');
      } else {
      Alert.alert('Error', 'Failed to add item.');
      }
  };

  const handleGoToItems = () => {
    navigation.navigate('listItem', { returnRequestId: returnRequestId, pharmacyId: pharmacyId});
      //, itemId: itemId});
  };

  return (
    <View style={styles.container}>

      <Text style={styles.addItemText}>Please add your Item's info</Text>

      <TextInput
        style={styles.input}
        placeholder="ndc"
        placeholderTextColor={COLORS.gray}
        value={ndc}
        onChangeText={setNdc}
      />

      <TextInput
        style={styles.input}
        placeholder="description"
        placeholderTextColor={COLORS.gray}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="manufacturer"
        placeholderTextColor={COLORS.gray}
        value={manufacturer}
        onChangeText={setManufacturer}
      />

      <TextInput
        style={styles.input}
        placeholder="fullQuantity"
        placeholderTextColor={COLORS.gray}
        value={fullQuantity}
        onChangeText={setFullQuantity}
      />
      
      <TextInput
        style={styles.input}
        placeholder="partialQuantity"
        placeholderTextColor={COLORS.gray}
        value={partialQuantity}
        onChangeText={setPartialQuantity}
      />

      <TextInput
        style={styles.input}
        placeholder="expirationDate"
        placeholderTextColor={COLORS.gray}
        value={expirationDate}
        onChangeText={setExpirationDate}
      />

      <TextInput
        style={styles.input}
        placeholder="lotNumber"
        placeholderTextColor={COLORS.gray}
        value={lotNumber}
        onChangeText={setLotNumber}
      />

      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => handleAdd()}
      >
        <Text style={styles.AddButtonText}>Add Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.GoToItemsButton}
        onPress={() => handleGoToItems()}
      >
        <Text style={styles.GoToItemsButtonText}>Go to Items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
