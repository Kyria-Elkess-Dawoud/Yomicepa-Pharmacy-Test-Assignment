import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './createReturnRequest.styles';
import SelectList from 'react-native-dropdown-select-list';

const CreateReturnRequest = () => {
  const [serviceType, setServiceType] = useState('');
  const [wholesaler, setWholesaler] = useState('');

  const serviceTypesList = [
    {key: '1', value: 'EXPRESS_SERVICE'},
    {key: '2', value: 'FULL_SERVICE'},
  ];

  const fetchWholesalers = async () => {
    try {
      const response = await fetch('https://portal-test.rxmaxreturns.com/rxmax.json');
      const json = await response.json();
      
      const wholesalers = json.map(movie => ({
        name: movie.title,
        address: movie.address,
        // Add more fields as needed based on your JSON structure
      }));
      
      // Now 'wholesalers' array contains the list of wholesalers
      console.log(wholesalers);
      return wholesalers;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array or handle error as needed
    }
  };

  const handleSubmit = () => {
    //created
    //go to add item screen
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Service Type:</Text>
        <SelectList
            setSelected={setServiceType}
            data={serviceTypesList}
            placeholder={"Select service type"}
            searchPlaceholder="Search..."
        />

      <Text style={styles.label}>Wholsaler:</Text>
        <SelectList
            setSelected={setWholesaler}
            data={wholeSalerList}
            placeholder={"Select wholsaler"}
            searchPlaceholder="Search..."
        />


      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateReturnRequest;