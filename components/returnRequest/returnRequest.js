import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import myImage from '../../assets/returnRequestImage.jpeg';
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
      <View style={styles.imageContainer}>
        <Image source={myImage} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>ID: {request.id}</Text>
        <Text style={styles.text}>Created At: {request.createdAt}</Text>
        
        <View style={styles.itemsRow}>
          <Text style={styles.text}>Number of Items: {request.items}</Text>
            <TouchableOpacity onPress={handleItems}>
              <Text style={styles.showButtonText}>Show</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={styles.text}>Status: {request.status}</Text>
        <Text style={styles.text}>Service Type: {request.serviceType}</Text>
        <Text style={styles.text}>Associated Wholesaler: {request.associatedWholesaler}</Text>
      </View>

      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReturnRequest;