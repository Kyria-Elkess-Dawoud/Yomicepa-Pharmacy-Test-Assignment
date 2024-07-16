import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import myImage from '../assets/item.png';
import styles from './itemComponent.styles';
import { getAuthToken } from './utils';
import api from '../api/api';

const ItemComponent = ({ info, returnRequestId, pharmacyId }) => {

  // const [isEditing, setIsEditing] = useState(false);
  // const [newDescription, setNewDescription] = useState(info.description);

  const [itemId, setitemId] = useState('');

  useEffect(() => {

    const retrieveData = async () => {
      setitemId(info.id)
    };

    retrieveData();
  }, []);

  const handleDelete = async () => {
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
      Alert.alert('item deleted successfully!');
      return response.data;
    } catch (error) {
      console.error('Error deleting item in return request:', error);
    }
  };

  const handleUpdateDescription = async (updatedItemData) => {
    try {
      const token = await getAuthToken();
      if (!token) {
        throw new Error('No access token found');
      }
  

      const updatedItemData = { ...info, description: newDescription };
      const response = await api.put(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items/${itemId}`, updatedItemData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      console.log('update item in return request: ', response.data);
      Alert.alert('item updated successfully!');
      return response.data;
    } catch (error) {
      console.error('Error updating item in return request:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image source={{myImage}} style={styles.icon} />
      <View>
        <Text style={styles.text}>NDC: {info.ndc}</Text>
        <Text style={styles.text}>Description: {info.description}</Text>
        <Text style={styles.text}>Manufacturer: {info.manufacturer}</Text>
        <Text style={styles.text}>Full quantity: {info.fullQuantity}</Text>
        <Text style={styles.text}>Partial quantity: {info.partialQuantity}</Text>
        <Text style={styles.text}>Expiration date: {info.expirationDate}</Text>
        <Text style={styles.text}>Lot number: {info.lotNumber}</Text>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete()}>
          <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ItemComponent;