import { COLORS, FONT, SIZES } from "../../constants";

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './addItem.styles';

const AddItem = () => {
  const [ndc, setNdc] = useState('');
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [packageSize, setPackageSize] = useState('');
  const [requestType, setRequestType] = useState('');
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [dosage, setDosage] = useState('');
  const [fullQuantity, setFullQuantity] = useState('');
  const [partialQuantity, setPartialQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [status, setStatus] = useState('');
  const [lotNumber, setLotNumber] = useState('');

  const postFnToAdd = async (ndcString, descriptionString, manufacturerString, packageSizeString, 
    requestTypeString, nameString, strengthString, dosageString, fullQuantityString,
    partialQuantityString, expirationDateString, statusString, lotNumberString
  ) => {
    const url = '/pharmacies/{pharmacyId}/returnrequests/{returnRequestId}/items';
    const itemInfo = {
      ndc: ndcString,
      description: descriptionString,
      manufacturer: manufacturerString,
      packageSize: packageSizeString,
      requestType: requestTypeString,
      name: nameString,
      strength: strengthString,
      dosage: dosageString,
      fullQuantity: fullQuantityString,
      partialQuantity: partialQuantityString,
      expirationDate: expirationDateString,
      status: statusString,
      lotNumber: lotNumberString
    };

    try {
      const response = await api.post(url, itemInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //idk from here

      if (response.status === 200) {
        const accessToken = response.data.token;
        console.log('Access Token:', accessToken);
        await AsyncStorage.setItem('accessToken', accessToken); // Store token
        return accessToken;
      } else {
        console.error('Login failed:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const handleAdd = (ndc, description, manufacturer, packageSize, requestType, name, strength,
    dosage, fullQuantity, partialQuantity, expirationDate, status, lotNumber) => {
    // Handle the logic for adding an item here
    console.log(`NDC: ${ndc}`);
    console.log(`Description: ${description}`);
    console.log(`Manufacturer: ${manufacturer}`);
    console.log(`Package Size: ${packageSize}`);
    console.log(`Request Type: ${requestType}`);
    console.log(`Name: ${name}`);
    console.log(`Strength: ${strength}`);
    console.log(`Dosage: ${dosage}`);
    console.log(`Full Quantity: ${fullQuantity}`);
    console.log(`Partial Quantity: ${partialQuantity}`);
    console.log(`Expiration Date: ${expirationDate}`);
    console.log(`Status: ${status}`);
    console.log(`Lot Number: ${lotNumber}`);
    
    //show a successful message to the user, clear the form to prompt the user to add a new item
    router.push('/listItems'); // Adjust the route as needed
  };

  const handleAdd1 = async (ndc, description, manufacturer, packageSize, requestType, name, strength,
    dosage, fullQuantity, partialQuantity, expirationDate, status, lotNumber) => {

    const token = await postFnToAdd(ndc, description, manufacturer, packageSize, requestType, name, strength,
      dosage, fullQuantity, partialQuantity, expirationDate, status, lotNumber);

    if (token) {
      Alert.alert('Item has been added successfully!');
      // add----- and show a successful message to the user, clear the form to prompt the user to add a new item
    } else {
      Alert.alert('Add item failed');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.addItemText}>Add Item</Text>

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
        placeholder="packageSize"
        placeholderTextColor={COLORS.gray}
        value={packageSize}
        onChangeText={setPackageSize}
      />

      <TextInput
        style={styles.input}
        placeholder="requestType"
        placeholderTextColor={COLORS.gray}
        value={requestType}
        onChangeText={setRequestType}
      />
      
      <TextInput
        style={styles.input}
        placeholder="name"
        placeholderTextColor={COLORS.gray}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="strength"
        placeholderTextColor={COLORS.gray}
        value={strength}
        onChangeText={setStrength}
      />
      
      <TextInput
        style={styles.input}
        placeholder="dosage"
        placeholderTextColor={COLORS.gray}
        value={dosage}
        onChangeText={setDosage}
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
        placeholder="status"
        placeholderTextColor={COLORS.gray}
        value={status}
        onChangeText={setStatus}
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
        onPress={() => handleAdd(ndc, description, manufacturer, packageSize, requestType, name, strength,
            dosage, fullQuantity, partialQuantity, expirationDate, status, lotNumber)}
      >
        <Text style={styles.AddButtonText}>Add Item</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.loginButton} onPress={() => }>
            <Text style={styles.loginButtonText}>Go to Items</Text>
          </TouchableOpacity> */}
    </View>
  );
};

export default AddItem;
