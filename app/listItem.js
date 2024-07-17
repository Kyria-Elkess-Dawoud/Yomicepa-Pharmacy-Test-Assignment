import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import ItemComponent from '../components/item/itemComponent';
import styles from '../styles/listItem.styles';
import api from '../api/api';
import { useRoute } from '@react-navigation/native';
import { getAuthToken } from '../utils/getAuthToken';
import { useNavigation } from '@react-navigation/native';

 const ListItems = () => {

  const navigation = useNavigation();

  const [listItemInfo, setlistItemInfo] = useState([]);

  const route = useRoute();

  const { returnRequestId, pharmacyId } = route.params;

  const handleReturnRequestScreen = () => {

    navigation.navigate('showReturnRequest');
  }


  useEffect(() => {
    const listItemsInReturnRequest = async () => {
      console.log('return request id for list item screen: ', returnRequestId);
      console.log('pharmacy id for list item screen: ', pharmacyId);
      try {
        const token = await getAuthToken();
        if (!token) {
          throw new Error('No access token found');
        }
    
        const response = await api.get(`/pharmacies/${pharmacyId}/returnrequests/${returnRequestId}/items`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        
        setlistItemInfo(response.data);
        console.log(' items in return request: ', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching items in return request:', error);
      }
    };

    listItemsInReturnRequest();
    console.log(' item id:', listItemInfo.id);
  }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Items info:</Text>
        {listItemInfo.length > 0 ? (
          <FlatList
            data={listItemInfo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ItemComponent info={item} returnRequestId={returnRequestId} pharmacyId={pharmacyId}/>}
          />
        ) : (
          <Text style={styles.title}>No items found</Text>
        )}

        <TouchableOpacity style={styles.createButton} onPress={() => handleReturnRequestScreen()}>
          <Text style={styles.createButtonText}>Go to Return Requests Screen</Text>
        </TouchableOpacity>
      </View>
    );
  };

 export default ListItems;
