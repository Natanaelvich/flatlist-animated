import React, {useState, useEffect} from 'react';
import {View, Image, ImageBackground} from 'react-native';

import {Container, Botao, TextoBotao, Input, Label} from './styles';
import {colors} from '../../core/helper';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/login/fundo.png';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    setLogin('');
    setSenha('');
  });

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 450,
        }}>
        <ImageBackground
          source={backgroundImage}
          style={{
            height: '100%',
            resizeMode: 'contain',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            source={logo}
            style={{width: 400, height: 200, marginBottom: 50}}
          />
        </ImageBackground>
      </View>

      <Container>
        <Label color={colors.laranja}>LOGIN</Label>
        <Input onChangeText={text => setLogin(text)} value={login} />
        <Label color={colors.azul}>SENHA</Label>
        <Input onChangeText={text => setSenha(text)} value={senha} />

        <Botao>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
      </Container>
    </>
  );
}

export default Login;
