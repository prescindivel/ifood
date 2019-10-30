import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

const Restaurant = ({ navigation, restaurant }) => {
  const handleNavigate = id => {
    navigation.navigate('Order', { id });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigate(restaurant._id)}>
      <S.Container>
        <S.Photo source={{ uri: restaurant.thumbnailUrl }} />
        <S.Details>
          <S.Name>{restaurant.name}</S.Name>
          <S.FoodType>{restaurant.foodType}</S.FoodType>
          <S.Address>
            {restaurant.address} {'\n'} {restaurant.city} - {restaurant.state}
          </S.Address>
        </S.Details>
      </S.Container>
    </TouchableOpacity>
  );
};

export default withNavigation(Restaurant);
