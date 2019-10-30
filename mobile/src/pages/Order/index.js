import React from 'react';
import {
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';

import Button from '../../components/Button';

import api from '../../services/api';

import * as S from './styles';

const Order = ({ navigation }) => {
  const foods = [
    {
      id: '1',
      name: 'Prato 1',
      price: 21.2,
      description:
        'Bacon ipsum dolor amet andouille chuck short ribs, tri-tip burgdoggen ball tip tenderloin meatloaf shoulder',
      thumbnailUrl: 'http://lorempixel.com/200/200/food/',
    },
    {
      id: '2',
      name: 'Prato 2',
      price: 45.2,
      description:
        'Bacon ipsum dolor amet andouille chuck short ribs, tri-tip burgdoggen ball tip tenderloin meatloaf shoulder',
      thumbnailUrl: 'http://lorempixel.com/200/200/food/',
    },
    {
      id: '3',
      name: 'Prato 3',
      price: 33.2,
      description:
        'Bacon ipsum dolor amet andouille chuck short ribs, tri-tip burgdoggen ball tip tenderloin meatloaf shoulder',
      thumbnailUrl: 'http://lorempixel.com/400/200/food/',
    },
  ];

  const id = navigation.getParam('id');

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  const handlePress = async ({ name }) => {
    const token = await AsyncStorage.getItem('token');

    await api.post(
      `/restaurants/${id}/orders`,
      { name },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    Alert.alert('Pedido realizado com sucesso');

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <S.Container>
        <ScrollView>
          <FlatList
            data={foods}
            keyExtractor={food => food.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <S.Food>
                  <S.Details>
                    <S.Name>{item.name}</S.Name>
                    <S.Description>{item.description}</S.Description>
                    <S.Price>R$ {item.price.toFixed(2)}</S.Price>
                  </S.Details>
                  <S.Photo source={{ uri: item.thumbnailUrl }} />
                </S.Food>
              </TouchableOpacity>
            )}
          ></FlatList>

          <Button onPress={handleCancel}>Cancelar</Button>
        </ScrollView>
      </S.Container>
    </SafeAreaView>
  );
};

export default Order;
