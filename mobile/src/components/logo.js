import React from 'react';

import {View, ImageBackground, Image} from 'react-native';

import logo from '../assets/logo.png';
import backgroundImage from '../assets/login/fundo.png';

const Logo = () => (
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
);

export default Logo;
