import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { AsyncStorage, ScrollView, Platform, Alert } from 'react-native';

import Header from '../../components/Header';
import Restaurant from '../../components/Restaurant';

import api from '../../services/api';

import * as S from './styles';

const Home = () => {
  const [username, setUsername] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('userId').then(userId => {
      const socket = socketio('http://localhost:3333', {
        query: { userId },
      });

      socket.on('order_response', order => {
        console.log(order);

        Alert.alert(
          `Seu pedido ${order.name} em ${order.restaurant.name} foi ${
            order.approved ? 'ACEITO' : 'REJEITADO'
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    const getUsername = async () => {
      const username = await AsyncStorage.getItem('username');
      username && setUsername(username);
    };

    getUsername();
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const token = await AsyncStorage.getItem('token');
      const response = await api.get('/restaurants', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRestaurants(response.data);
    };

    fetchRestaurants();
  }, []);

  return (
    <S.Container
      forceInset={Platform.OS === 'android' && { vertical: 'never' }}
    >
      <Header />

      <ScrollView>
        {restaurants.length > 0 ? (
          <S.RestaurantList
            data={restaurants}
            keyExtractor={restaurant => restaurant._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Restaurant restaurant={item} />}
          />
        ) : (
          <S.WelcomeMessage>
            Olá {username}, Você não tem nenhum restaurante cadastrado.
          </S.WelcomeMessage>
        )}
      </ScrollView>
    </S.Container>
  );
};

export default Home;
