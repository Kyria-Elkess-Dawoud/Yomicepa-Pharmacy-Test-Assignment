import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../constants';
import Login from '../components';


const Home = () => {
  const router = useRouter();

  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.pastelBlue }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.small }}>
          <Login/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
