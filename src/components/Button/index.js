import React from 'react';
import {Container, ButtonText} from './styles';

const Button = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <ButtonText>DOWNLOAD DA PRÉVIA</ButtonText>
    </Container>
  );
};

export default Button;
