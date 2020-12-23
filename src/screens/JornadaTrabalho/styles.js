import styled, { css } from 'styled-components/native';

import { colors } from '../../core/helper';

import fundo from '../../assets/fundo-azul.jpg';

export const ContainerStatus = styled.View`
  flex-direction: row;
  background-color: ${colors.azulEscuro};
  align-items: center;
  padding: 12px;
`;

export const ContainerJornada = styled.ScrollView`
  flex: 1;
  background-color: ${colors.azul};
  background-color: #999;
`;
export const ContentJornada = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.ImageBackground.attrs({
  source: fundo,
  imageStyle: {
    resizeMode: 'cover',
  },
})`
  flex: 1;
`;

export const ContainerLeft = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContainerRight = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContainerVertical = styled.View`
  flex-direction: column;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  align-items: center;
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
  margin-top: 20px;
  height: 60px;
  width: 80%;
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
  font-size: 21px;
`;
