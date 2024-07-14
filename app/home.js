import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../constants';
import Login from '../components';
import ReturnRequest from '../components';
import ShowReturnRequests from '../components';
import styles from './home.styles';
import AddItem from '../components';


const Home = () => {
  const router = useRouter();

//AAAADDDDIIITTTEEEMMM
// return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ flex: 1, padding: SIZES.medium }}>
//           <AddItem handleAdd={handleAdd} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );

  //LOOOGGGGIIINNNNN
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.small }}>
          <Login/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
   
  //showreturnrequest
//   const sampleRequests = [
//     { id: 1, createdAt: '2023-07-14', items: 5, status: 'Pending', serviceType: 'Return', associatedWholesaler: 'Wholesaler A' },
//     { id: 2, createdAt: '2023-07-15', items: 3, status: 'Approved', serviceType: 'Exchange', associatedWholesaler: 'Wholesaler B' },
//     { id: 3, createdAt: '2023-07-16', items: 2, status: 'Pending', serviceType: 'Return', associatedWholesaler: 'Wholesaler C' },
//     { id: 4, createdAt: '2023-07-17', items: 4, status: 'Rejected', serviceType: 'Return', associatedWholesaler: 'Wholesaler D' },
//     { id: 5, createdAt: '2023-07-18', items: 1, status: 'Approved', serviceType: 'Exchange', associatedWholesaler: 'Wholesaler E' },
//     { id: 6, createdAt: '2023-07-19', items: 6, status: 'Pending', serviceType: 'Return', associatedWholesaler: 'Wholesaler F' },
//     { id: 7, createdAt: '2023-07-20', items: 3, status: 'Approved', serviceType: 'Return', associatedWholesaler: 'Wholesaler G' },
//     { id: 8, createdAt: '2023-07-21', items: 2, status: 'Pending', serviceType: 'Exchange', associatedWholesaler: 'Wholesaler H' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ShowReturnRequests sampleRequests={sampleRequests} />
//     </SafeAreaView>
//   );
};

export default Home;
