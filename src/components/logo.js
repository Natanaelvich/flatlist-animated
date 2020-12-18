import React from 'react';

import { ImageBackground, Image } from 'react-native';

import logo from '../assets/logo.png';
import backgroundImage from '../assets/login/fundo.png';

const Logo = ({ children }) => (
  <ImageBackground
    source={backgroundImage}
    style={{
      flex: 1,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Image
      resizeMode="contain"
      source={logo}
      style={{ width: '90%', marginBottom: 50 }}
    />
    {children}
  </ImageBackground>
);

export default Logo;
