import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { Container, Header, Name, FoodType, Address } from './styles';

const Restaurant = ({ restaurant }) => {
  return (
    <Container>
      <Header style={{ backgroundImage: `url(${restaurant.thumbnailUrl})` }} />
      <Name>{restaurant.name}</Name>
      <FoodType>{restaurant.foodType}</FoodType>
      <Address>
        {restaurant.address} <br /> {restaurant.city} - {restaurant.state}
      </Address>
      <Link to={{ pathname: '/restaurant', state: { restaurant } }}>
        <Button>Editar restaurante</Button>
      </Link>
    </Container>
  );
};

export default Restaurant;
