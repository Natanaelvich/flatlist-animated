import styled, {css} from 'styled-components/native';

import {colors} from '../../core/helper';

export const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: #fff;
`;

export const Label = styled.Text`
  width: 400px;
  text-align: left;
  font-size: 22px;
  margin-bottom: 5px;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const Input = styled.TextInput`
  width: 400px;
  background-color: #d2d2d2;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 40px;
  height: 60px;
  width: 250px;
  border-radius: 5px;
  background-color: ${colors.azul};
  padding: 5px;
  justify-content: center;
`;

export const TextoBotao = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;
