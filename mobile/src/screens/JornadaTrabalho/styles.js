import styled, {css} from 'styled-components/native';

import {colors} from '../../core/helper';

export const ContainerStatus = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 5px 10px 10px 5px;
`;

export const Container = styled.View``;

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
