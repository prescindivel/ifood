import React, { useState } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PrimaryButton from '../../components/PrimaryButton';
import ErrorMessage from '../../components/ErrorMessage';

const Register = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    setErrorMessage('');

    try {
      await api.post('/register', { name, email, password });

      history.push('/');
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
          type="text"
          name="name"
          label="NOME"
          placeholder="Digite aqui seu nome"
          onChange={e => setName(e.target.value)}
        />
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
        <PrimaryButton type="submit" disabled={!name || !email || !password}>
          Registrar
        </PrimaryButton>
      </form>

      <p className="button-separator">Já é cadastrado?</p>

      <Button type="button" onClick={() => history.push('/')}>
        Fazer login
      </Button>
    </>
  );
};

export default Register;
