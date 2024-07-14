import React, { useState } from 'react';
import { COLORS } from "../../constants";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './login.styles';
import myImage from '../../assets/pharmacyLogo.png';
import api from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const getBearerToken = async (usernameString, passwordString) => {
    const url = '/auth';
    const credentials = {
      username: usernameString,
      password: passwordString
    };

    try {
      const response = await api.post(url, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

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

  const handleLogin = async (username, password) => {
    const token = await getBearerToken(username, password);
    if (token) {
      // Navigate to the next screen after successful login
      navigation.navigate('showReturnRequest');
      //router.push('/showReturnRequest');
    } else {
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.logo} />

      <Text style={styles.welcomeText}>Welcome!</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={COLORS.gray}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin(username, password)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;