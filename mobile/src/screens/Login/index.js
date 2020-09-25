import React, {useState, useEffect} from 'react';
import {Image, Text} from 'react-native';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors} from '../../core/helper';
import logo from '../../assets/logo.png';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <Image
        source={logo}
        style={{width: 500, height: 250, marginTop: -200, marginBottom: 50}}
      />

      <Label color={colors.laranja}>LOGIN</Label>
      <Input />
      <Label color={colors.azul}>SENHA</Label>
      <Input />

      <Botao>
        <TextoBotao>ENTRAR</TextoBotao>
      </Botao>
    </Container>
  );
}

export default Login;
