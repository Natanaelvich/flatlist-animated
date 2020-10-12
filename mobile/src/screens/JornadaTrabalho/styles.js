import styled, {css} from 'styled-components/native';

import {colors} from '../../core/helper';

import fundo from '../../assets/fundo-azul.jpg';

export const ContainerStatus = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px 30px 5px 30px;
  background-color: ${colors.azulEscuro};
  height: 100%;
  max-height: 90px;
`;

export const ContainerJornada = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${colors.azul};
`;

export const Background = styled.ImageBackground.attrs({
  source: fundo,
  imageStyle: {
    resizeMode: 'cover',
  },
})`
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const ContainerLeft = styled.View`
  flex-direction: column;
`;

export const ContainerVertical = styled.View`
  flex-direction: column;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #fff;
  /*font-family: Roboto, sans-serif;*/
  ${props =>
    props.fontSize
      ? css`
          font-size: ${props.fontSize}px;
        `
      : css`
          font-size: 12px;
        `}
  ${props =>
    props.title
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
`;

export const Botao = styled.TouchableOpacity`
  ${props =>
    props.principal
      ? css`
          background-color: ${colors.laranja};
        `
      : css`
          background-color: #fff;
        `};
  margin-top: 40px;
  height: 60px;
  width: 250px;
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  ${props =>
    props.principal
      ? css`
          color: #fff;
        `
      : css`
          color: ${colors.azul};
        `};
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;
