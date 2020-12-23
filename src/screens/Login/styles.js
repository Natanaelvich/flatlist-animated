import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { colors } from '../../core/helper';

export const Container = styled.ScrollView``;
export const ImageContainer = styled.View`
  height: 20%;
`;
export const Form = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;
export const TitleForm = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  align-self: center;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
export const OpcoesButton = styled(BorderlessButton)`
  margin: 12px 0;
  align-items: center;
  justify-content: center;
`;
export const Opcoes = styled.Text`
  font-size: 18px;
  color: ${colors.azulEscuro};
`;
export const Label = styled.Text`
  font-size: 16px;
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
  height: 40px;
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
  font-size: 21px;
`;
