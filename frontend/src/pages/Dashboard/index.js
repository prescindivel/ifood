import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Restaurant from '../../components/Restaurant';
import PrimaryButton from '../../components/PrimaryButton';
import RequestNotifications from '../../components/RequestNotifications';

import { RestaurantList } from './styles';

const Dashboard = ({ history }) => {
  const [restaurants, setRestaurants] = useState([]);

  const userName = localStorage.getItem('user_name');

  useEffect(() => {
    async function fetchRestaurants() {
      const token = localStorage.getItem('token');
      const response = await api.get('/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRestaurants(response.data);
    }
    fetchRestaurants();
  }, []);

  return (
    <>
      <RequestNotifications />

      {restaurants.length > 0 ? (
        <RestaurantList>
          {restaurants.map(
            ({ _id, name, foodType, address, city, state, thumbnailUrl }) => (
              <Restaurant
                key={_id}
                restaurant={{
                  _id,
                  name,
                  foodType,
                  address,
                  city,
                  state,
                  thumbnailUrl,
                }}
              />
            )
          )}
        </RestaurantList>
      ) : (
        <p className="page-title">
          Olá {userName}, Você não tem nenhum restaurante cadastrado.
        </p>
      )}

      <PrimaryButton onClick={() => history.push('/restaurant')}>
        Adicionar novo restaurante
      </PrimaryButton>
    </>
  );
};

export default Dashboard;
