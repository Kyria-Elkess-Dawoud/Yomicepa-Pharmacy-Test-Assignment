import React from 'react';
import { View, Text, Image } from 'react-native';
import myImage from '../assets/return.png';
import styles from './returnRequest.styles';

const ReturnRequest = ({ request }) => {
  //number of items can be clicked on to go to list Items
  return (
    <View style={styles.container}>
      <Image source={{myImage}} style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>ID: {request.id}</Text>
        <Text style={styles.text}>Created At: {request.createdAt}</Text>
        <Text style={styles.text}>Items: {request.items}</Text>
        <Text style={styles.text}>Status: {request.status}</Text>
        <Text style={styles.text}>Service Type: {request.serviceType}</Text>
        <Text style={styles.text}>Associated Wholesaler: {request.associatedWholesaler}</Text>
      </View>
    </View>
  );
};

export default ReturnRequest;