import React from 'react';

import { Label, Input } from './styles';

const TextInput = ({ label, ...rest }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input {...rest} />
    </>
  );
};

export default TextInput;
