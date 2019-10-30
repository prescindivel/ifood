import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
