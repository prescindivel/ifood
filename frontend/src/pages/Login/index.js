import React, { useState } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PrimaryButton from '../../components/PrimaryButton';
import ErrorMessage from '../../components/ErrorMessage';

const Login = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    setErrorMessage('');

    try {
      const response = await api.post('/login', { email, password });

      const {
        token,
        user: { _id, name },
      } = response.data;

      await localStorage.setItem('token', token);
      await localStorage.setItem('user_name', name);
      await localStorage.setItem('user_id', _id);

      history.push('/dashboard');
    } catch (error) {
      const { message } = error.response.data;

      setErrorMessage(message);
    }
  };

  return (
    <>
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="E-MAIL"
          placeholder="Digite aqui seu e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          label="SENHA"
          placeholder="Digite aqui sua senha"
          onChange={e => setPassword(e.target.value)}
        />
        <PrimaryButton type="submit" disabled={!email || !password}>
          Entrar
        </PrimaryButton>
      </form>

      <p className="button-separator">Ainda não é cadastrado?</p>

      <Button type="button" onClick={() => history.push('/register')}>
        Registre-se
      </Button>
    </>
  );
};

export default Login;
