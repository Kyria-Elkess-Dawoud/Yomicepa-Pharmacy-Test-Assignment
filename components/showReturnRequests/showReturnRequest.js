import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import ReturnRequest from '../returnRequest/returnRequest';
import styles from './showReturnRequest.styles';
import axios from 'axios';

 const ShowReturnRequests = ({ sampleRequests }) => {
//   const [returnRequests, setReturnRequests] = useState([]);

     const handleCreateRequest = () => {

     };

//   useEffect(() => {
//     axios.get('https://your-api-endpoint.com/return-requests')
//       .then(response => {
//         setReturnRequests(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={returnRequests}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => <ReturnRequest request={item} />}
//       />
//     </View>
//   );


     return (
        <View style={styles.container}>
          <FlatList
            data={sampleRequests}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ReturnRequest request={item} />}
            contentContainerStyle={{ paddingBottom: 1 }}
          />

          <TouchableOpacity style={styles.createButton} onPress={() => handleCreateRequest()}>
            <Text style={styles.createButtonText}>Create Return Request</Text>
          </TouchableOpacity>
        </View>
    );
 };

 export default ShowReturnRequests;
