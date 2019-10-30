import React, { useState, useEffect, useMemo } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PrimaryButton from '../../components/PrimaryButton';

import camera from '../../assets/camera.svg';

import { Thumbnail } from './styles';

const Restaurant = ({ history, location }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const token = window.localStorage.getItem('token');
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const thumbnailPreview = useMemo(() => {
    return thumbnail && window.URL.createObjectURL(thumbnail);
  }, [thumbnail]);

  useEffect(() => {
    const patchForm = async () => {
      if (location.state) {
        const { restaurant } = location.state;
        const thumb = await fetch(restaurant.thumbnailUrl).then(res =>
          res.blob()
        );

        setThumbnail(thumb);
        setName(restaurant.name);
        setFoodType(restaurant.foodType);
        setAddress(restaurant.address);
        setCity(restaurant.city);
        setState(restaurant.state);
      }
    };
    patchForm();
  }, [location.state]);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('name', name);
    data.append('foodType', foodType);
    data.append('address', address);
    data.append('city', city);
    data.append('state', state);

    try {
      if (location.state) {
        const { _id } = location.state.restaurant;
        await api.put(`restaurants/${_id}`, data, headers);
      } else {
        await api.post('restaurants', data, headers);
      }

      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const { _id } = location.state.restaurant;
      await api.delete(`restaurants/${_id}`, headers);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Thumbnail
          id="thumbnail"
          style={{ backgroundImage: `url(${thumbnailPreview})` }}
          className={thumbnailPreview && 'has-thumbnail'}
        >
          <input
            type="file"
            hidden
            onChange={e => setThumbnail(e.target.files[0])}
          />
          <img src={camera} alt="Select img" />
        </Thumbnail>

        <Input
          type="text"
          name="name"
          label="NOME"
          placeholder="Digite aqui o nome do restaurante"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <Input
          type="text"
          name="foodType"
          label="ESPECIALIDADE"
          placeholder="Digite aqui a especialidade do restaurante"
          value={foodType}
          onChange={e => setFoodType(e.target.value)}
        />

        <Input
          type="text"
          name="address"
          label="ENDEREÇO"
          placeholder="Digite aqui o endereço"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <Input
          type="text"
          name="city"
          label="CIDADE"
          placeholder="Digite aqui a cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        <Input
          type="text"
          name="state"
          label="ESTADO"
          placeholder="Digite aqui o estado"
          value={state}
          onChange={e => setState(e.target.value)}
        />

        <PrimaryButton type="submit">
          {location.state ? 'Salvar' : 'Adicionar'}
        </PrimaryButton>
      </form>

      {location.state && (
        <PrimaryButton onClick={handleDelete} type="button">
          Excluir
        </PrimaryButton>
      )}

      <Button type="button" onClick={() => history.push('/dashboard')}>
        Voltar
      </Button>
    </>
  );
};

export default Restaurant;
