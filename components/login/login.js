import React, { useState, useEffect } from 'react';
import { COLORS } from "../../constants";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './login.styles';
import myImage from '../../assets/pharmacyLogo.png';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import getBearerToken from '../../app/getToken';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async (username, password) => {
    try {
      const token = await getBearerToken(username, password);
      if (token) {
        navigation.navigate('showReturnRequest');
      } else {
        Alert.alert('Login failed', 'Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Error', 'An unexpected error occurred during login. Please try again later.');
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