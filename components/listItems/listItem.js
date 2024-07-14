import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ItemComponent from '../item/itemComponent';
import styles from './showReturnRequest.styles';
import axios from 'axios';

 const ListItem = ({ sampleInfo }) => {
//   const [pharmacyItems, setPharmacyItems] = useState([]);

//   useEffect(() => {
//     axios.get('https://your-api-endpoint.com/return-requests')
//       .then(response => {
//         setPharmacyItems(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={pharmacyItems}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => <ItemComponent info={item} />}
//       />
//     </View>
//   );
//only edit the description
     return (
        <View style={styles.container}>
          <FlatList
            data={sampleInfo}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ItemComponent info={item} />}
            contentContainerStyle={{ paddingBottom: 1 }}
          />
        </View>
    );
 };

 export default ListItem;
