import React, { useState, useEffect } from 'react';
import { AsyncStorage, Image } from 'react-native';

import { Container, Form } from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

import api from '../../services/api';

import logo from '../../assets/logo.png';

const Register = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      token && navigation.navigate('List');
    });
  }, []);

  const handleSubmit = async () => {
    setErrorMessage('');

    try {
      await api.post('/register', { name, email, password });

      navigation.navigate('Login');
    } catch (error) {
      if (!error.response)
        return setErrorMessage('Aconteceu um erro inesperado');

      const { message } = error.response.data;

      setErrorMessage(message);
    }
  };

  return (
    <Container behavior="padding">
      <Image source={logo} />

      <Form>
        {errorMessage !== '' && <ErrorMessage error={errorMessage} />}
        <TextInput
          label="NOME"
          placeholder="Digite aqui seu nome"
          onChangeText={setName}
        />

        <TextInput
          label="E-MAIL"
          placeholder="Digite aqui seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <TextInput
          label="SENHA"
          placeholder="Digite aqui sua senha"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <Button
          primary
          onPress={handleSubmit}
          disabled={!name || !email || !password}
        >
          Registrar
        </Button>

        <Button onPress={() => navigation.navigate('Login')}>Voltar</Button>
      </Form>
    </Container>
  );
};

export default Register;
