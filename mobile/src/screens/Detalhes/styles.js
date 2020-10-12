import styled, {css} from 'styled-components/native';

import {colors} from '../../core/helper';

import fundo from '../../assets/fundo-azul.jpg';

export const Header = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 45px 30px 45px 30px;
  background-color: ${colors.azulEscuro};
  width: 100%;
  height: 100%;
  max-height: 110px;
`;

export const ContainerPrincipal = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
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

export const Center = styled.View`
  flex: 1;
  align-items: center;
  margin-left: -40px;
`;

export const ContainerVertical = styled.View`
  flex-direction: column;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Card = styled.View`
  background-color: #fff;
  /*border-width: 1px;
  border-style: solid;*/
  width: 90%;
  height: 90px;
  margin-top: 20px;
  border-radius: 5px;
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
