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

export const SubHeader = styled(Header)`
  background-color: ${colors.azulMaisEscuro};
  padding: 0;
  max-height: 70px;
  align-items: center;
  justify-content: center;
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
  ${props =>
    props.titleHeader
      ? css`
          margin-left: -65px;
        `
      : css`
          flex-direction: row;
          justify-content: center;
          max-height: 80px;
        `}
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

export const CircleIconBorder = styled.View`
  border-width: 3px;
  border-color: #fff;
  border-radius: 30px;
  width: 60px;
  align-items: center;
`;

export const CircleIconTemp = styled.View`
  background-color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;

export const Exagon = styled.View`
  width: 100px;
  height: 100px;
  background: #fff;
  position: relative;

  &:before {
    content: '';
    width: 100px;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
  }
  &:after {
    content: '';
    width: 100px;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
  }
`;
