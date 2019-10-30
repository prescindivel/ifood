import React from 'react';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import Button from '../Button';

const LogoutButton = ({ navigation }) => {
  const handlePress = () => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('userId');

    navigation.navigate('Login');
  };

  return <Button onPress={handlePress}>Sair</Button>;
};

export default withNavigation(LogoutButton);
