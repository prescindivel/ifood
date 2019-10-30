import React, { useState, useEffect } from 'react';
import { AsyncStorage, Image } from 'react-native';

import { Container, Form } from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

import api from '../../services/api';

import logo from '../../assets/logo.png';

const Login = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('victorfrontend@gmail.com');
  const [password, setPassword] = useState('123');

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      token && navigation.navigate('List');
    });
  }, []);

  const handleSubmit = async () => {
    setErrorMessage('');

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const {
        token,
        user: { _id, name },
      } = response.data;

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userId', _id);
      await AsyncStorage.setItem('username', name);

      navigation.navigate('Home');
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

        <Button primary onPress={handleSubmit} disabled={!email || !password}>
          Entrar
        </Button>

        <Button onPress={() => navigation.navigate('Register')}>Registre-se</Button>
      </Form>
    </Container>
  );
};

export default Login;
