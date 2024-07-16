import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import myImage from '../assets/item.png';
import styles from './itemComponent.styles';

const ItemComponent = ({ info }) => {

  const handleDelete = async (pharmacyId, returnRequestId, itemId) => {
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

  const handleUpdateDescription = async (pharmacyId, returnRequestId, itemId, updatedItemData) => {
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

      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(info.id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>

      <TouchableOpacity style={styles.editButton} onPress={() => handleUpdateDescription(info.id)}>
            <Text style={styles.editButtonText}>edit the description</Text>
          </TouchableOpacity>
    </View>
  );
};

export default ItemComponent;