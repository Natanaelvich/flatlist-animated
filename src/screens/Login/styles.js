import styled, { css } from 'styled-components/native';

import { colors } from '../../core/helper';

export const Container = styled.View`
  align-items: flex-start;
  width: 80%;
`;

export const Label = styled.Text`
  font-size: 22px;
  margin-bottom: 5px;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #d2d2d2;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 12px;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 40px;
  height: 60px;
  width: 80%;
  border-radius: 5px;
  background-color: ${colors.azul};
  padding: 5px;
  justify-content: center;
  align-self: center;
`;

export const TextoBotao = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;
