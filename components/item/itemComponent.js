import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { COLORS } from "../../constants";
import myImage from '../../assets/itemImage.jpeg';
import styles from './itemComponent.styles';
import { getAuthToken } from '../../utils/getAuthToken';
import api from '../../api/api';
import Ionicons from '@expo/vector-icons/Ionicons';

const ItemComponent = ({ info, returnRequestId, pharmacyId }) => {

  const [itemId, setitemId] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

    const retrieveData = async () => {
      setitemId(info.id);
      setNewDescription(info.description);
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

  const handleUpdateDescription = async () => {
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

  const editing = () => {
    return (
      <View>
        <TextInput
        style={styles.input}
        placeholder="description"
        placeholderTextColor={COLORS.gray}
        value={newDescription}
        onChangeText={setNewDescription}
      />

        <TouchableOpacity onPress={() => handleUpdateDescription()} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={myImage} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>NDC: {info.ndc}</Text>
        {isEditing ? (
          editing()
        ) : (
          <View style={styles.descriptionRow}>
            <Text style={styles.text}>Description: {info.description}</Text>
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Ionicons name="create-outline" size={24} color="blue" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.text}>Manufacturer: {info.manufacturer}</Text>
        <Text style={styles.text}>Full quantity: {info.fullQuantity}</Text>
        <Text style={styles.text}>Partial quantity: {info.partialQuantity}</Text>
        <Text style={styles.text}>Expiration date: {info.expirationDate}</Text>
        <Text style={styles.text}>Lot number: {info.lotNumber}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteIcon}>
        <Ionicons name="trash-outline" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemComponent;