const INITIAL_STATE = {
  hash: null,
  id_user: null,
  id_ciente: null,
  id_motorista: null,
  motorista: null,
  logged: false,
  placa: null,
  idVeiculo: null,
};

export default function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case '@user/SIGN_IN_SUCCCESS': {
      const { hash, id_user, id_ciente, id_motorista, motorista } = payload;
      return {
        ...state,
        hash,
        id_user,
        id_ciente,
        id_motorista,
        motorista,
        logged: true,
      };
    }

    case '@user/SINGN_OUT': {
      return {
        ...state,
        hash: null,
        id_user: null,
        id_ciente: null,
        id_motorista: null,
        motorista: null,
        logged: false,
      };
    }

    case '@user/ADD_INFOS_VEICULO': {
      const { placa, idVeiculo } = payload;
      return {
        ...state,
        placa,
        idVeiculo,
      };
    }

    default:
      return state;
  }
}
