import React, { useState, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {
  Container,
  Botao,
  TextoBotao,
  Input,
  Label,
  Form,
  Opcoes,
  OpcoesButton,
} from './styles';
import { colors, token, veirificarInternet } from '../../core/helper';
import api from '../../services/api';

import Background from '../../components/Background';
import logo from '../../assets/logo.png';
import {
  signInSuccess,
  addInfosVeiculo,
} from '../../store/modules/user/actions';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function Login() {
  const refSenha = useRef();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [placa, setPlaca] = useState(null);
  const [idVeiculo, setIdVeiculo] = useState(null);
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (__DEV__) {
      setLogin('bruno');
      setSenha('1234');
    }
  }, []);

  async function handleLogin() {
    try {
      if ((placa && !idVeiculo) || (!placa && idVeiculo)) {
        Alert.alert(
          'Erro de validação',
          'Para editar as informações do veiculo, todas os campos devem ser preenchidos'
        );
        return;
      }
      setLoading(true);
      veirificarInternet();

      const url = `login_jornada.php`;

      const form = new FormData();

      form.append('v_login', login);
      form.append('v_senha', senha);
      form.append('token', token);

      const response = await api.post(url, form, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (placa && idVeiculo) {
        form.append('placa', placa);
        form.append('id_veiculo', idVeiculo);
      }
      const {
        hash,
        id_user,
        id_ciente,
        id_motorista,
        motorista,
      } = response.data[0];

      dispatch(
        signInSuccess({
          hash,
          id_user,
          id_ciente,
          id_motorista,
          motorista,
        })
      );

      if (placa && idVeiculo) {
        dispatch(
          addInfosVeiculo({
            placa,
            idVeiculo,
          })
        );
      }
    } catch (error) {
      if (error.response) {
        if (error.response.errormsg) {
          Alert.alert('Erro', error.response.errormsg);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 12,
      }}
    >
      <Background>
        <Image
          resizeMode="contain"
          source={logo}
          style={{ alignSelf: 'center', height: '20%', marginTop: 20 }}
        />
        <Form>
          <Label color={colors.laranja}>LOGIN</Label>
          <Input
            onChangeText={text => setLogin(text)}
            value={login}
            onSubmitEditing={() => refSenha.current.focus()}
          />
          <Label color={colors.azul}>SENHA</Label>
          <Input
            ref={refSenha}
            onChangeText={text => setSenha(text)}
            value={senha}
            onSubmitEditing={() => handleLogin()}
            secureTextEntry
          />

          <OpcoesButton
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setMostrarOpcoes(!mostrarOpcoes);
            }}
          >
            {mostrarOpcoes && (
              <MaterialIcons
                name="expand-less"
                size={45}
                color={colors.azulEscuro}
              />
            )}
            <Opcoes>Informações do veiculo</Opcoes>
            {!mostrarOpcoes && (
              <MaterialIcons
                name="expand-more"
                size={45}
                color={colors.azulEscuro}
              />
            )}
          </OpcoesButton>

          {mostrarOpcoes && (
            <>
              <Label color="#333333">PLACA</Label>
              <Input onChangeText={setPlaca} value={placa} />
              <Label color="#333333">ID VEICULO</Label>
              <Input onChangeText={setIdVeiculo} value={idVeiculo} />
            </>
          )}

          <Botao onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#fff"
                animating={loading}
              />
            ) : (
              <TextoBotao>ENTRAR</TextoBotao>
            )}
          </Botao>
        </Form>
      </Background>
    </Container>
  );
}

export default Login;
