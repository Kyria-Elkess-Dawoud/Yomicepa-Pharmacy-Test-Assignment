import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import myImage from '../assets/return.png';
import styles from './returnRequest.styles';
import { useNavigation } from '@react-navigation/native';

const ReturnRequest = ({ request }) => {

  const navigation = useNavigation();

  const handleItems = async (requestId) => {
    navigation.navigate('listItem', { returnRequestId: requestId });
  };

  return (
    <View style={styles.container}>
      <Image source={{myImage}} style={styles.icon} />
      <View>
        <Text style={styles.text}>ID: {request.id}</Text>
        <Text style={styles.text}>Created At: {request.createdAt}</Text>
        <Text style={styles.text}>Number of Items: {request.items}</Text>
        <Text style={styles.text}>Status: {request.status}</Text>
        <Text style={styles.text}>Service Type: {request.serviceType}</Text>
        <Text style={styles.text}>Associated Wholesaler: {request.associatedWholesaler}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => handleItems(request.id)}>
          <Text style={styles.addButtonText}>items</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReturnRequest;