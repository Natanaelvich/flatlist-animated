import styled, { css } from 'styled-components/native';

import { colors } from '../../core/helper';

import fundo from '../../assets/fundo-azul.jpg';

export const Header = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 10px;
  background-color: ${colors.azulEscuro};
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
`;

export const ContainerVertical = styled.View`
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Card = styled.View`
  background-color: #fff;
  /*border-width: 1px;
  border-style: solid;*/
  flex: 1;
  flex-direction: row;
  width: 90%;
  max-height: 120px;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
  padding-horizontal: 25px;
`;

export const Text = styled.Text`
  color: ${colors.azulEscuro};
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
          font-family: Montserrat_700Bold;
        `
      : css`
          font-family: Montserrat_400Regular;
        `}
`;

export const CircleIcon = styled.View`
  border-width: 3px;
  border-color: #fff;
  border-radius: 21px;
  width: 41px;
  height: 41px;
  align-items: center;
  justify-content: center;
`;

export const Hide = styled.View`
  width: 41px;
  height: 41px;
`;
