import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import myImage from '../assets/return.png';
import styles from './returnRequest.styles';
import { useNavigation } from '@react-navigation/native';

const ReturnRequest = ({ request, pharmacyId }) => {

  const navigation = useNavigation();

  const handleItems = async () => {
    navigation.navigate('listItem', { returnRequestId: request.id, pharmacyId: pharmacyId });
  };

  const handleAdd = async () => {
    navigation.navigate('addItem', { returnRequestId: request.id, pharmacyId: pharmacyId });
  };

  return (
    <View style={styles.container}>
      <Image source={{myImage}} style={styles.icon} />
      <View>
        <Text style={styles.text}>ID: {request.id}</Text>
        <Text style={styles.text}>Created At: {request.createdAt}</Text>
        
        <View style={styles.itemsRow}>
          <Text style={styles.text}>Number of Items: {request.items}</Text>
            <TouchableOpacity style={styles.showButton} onPress={handleItems}>
              <Text style={styles.showButtonText}>Show</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={styles.text}>Status: {request.status}</Text>
        <Text style={styles.text}>Service Type: {request.serviceType}</Text>
        <Text style={styles.text}>Associated Wholesaler: {request.associatedWholesaler}</Text>
      </View>

      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()}>
          <Text style={styles.addButtonText}>add item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReturnRequest;