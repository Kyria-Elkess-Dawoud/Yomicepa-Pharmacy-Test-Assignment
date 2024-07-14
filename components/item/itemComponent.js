import React from 'react';
import { View, Text, Image } from 'react-native';
import myImage from '../../assets/item.png';
import styles from './items.styles';

const ItemComponent = ({ info }) => {

  const handleDelete = () => {

  };

  const handleEditDescription = () => {

  };

  return (
    <View style={styles.container}>
      <Image source={{myImage}} style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>NDC: {info.ndc}</Text>
        <Text style={styles.text}>Description: {info.description}</Text>
        <Text style={styles.text}>Manufacturer: {info.manufacturer}</Text>
        <Text style={styles.text}>Package size: {info.packageSize}</Text>
        <Text style={styles.text}>Request type: {info.requestType}</Text>
        <Text style={styles.text}>Name: {info.name}</Text>
        <Text style={styles.text}>Strength: {info.strength}</Text>
        <Text style={styles.text}>Dosage: {info.dosage}</Text>
        <Text style={styles.text}>Full quantity: {info.fullQuantity}</Text>
        <Text style={styles.text}>Partial quantity: {info.partialQuantity}</Text>
        <Text style={styles.text}>Expiration date: {info.expirationDate}</Text>
        <Text style={styles.text}>Status: {info.status}</Text>
        <Text style={styles.text}>Lot number: {info.lotNumber}</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => handleDelete()}>
            <Text style={styles.loginButtonText}>Delete</Text>
          </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => handleEditDescription()}>
            <Text style={styles.loginButtonText}>edit the description</Text>
          </TouchableOpacity>
    </View>
  );
};

export default ItemComponent;