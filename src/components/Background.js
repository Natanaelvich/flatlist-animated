import React from 'react';

import { ImageBackground, Image } from 'react-native';

import backgroundImage from '../assets/login/fundo.png';

const Background = ({ children }) => (
  <ImageBackground
    source={backgroundImage}
    style={{
      flex: 1,
      resizeMode: 'contain',
    }}
  >
    {children}
  </ImageBackground>
);

export default Background;
