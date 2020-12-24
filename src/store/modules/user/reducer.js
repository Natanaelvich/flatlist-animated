const INITIAL_STATE = {
  hash: null,
  id_user: null,
  id_ciente: null,
  id_motorista: null,
  motorista: null,
  logged: false,
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

    default:
      return state;
  }
}
