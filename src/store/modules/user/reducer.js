const INITIAL_STATE = {
  idUser: null,
  hashUser: null,
  logged: false,
};

export default function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case '@user/SIGN_IN_SUCCCESS': {
      const { idUser, hashUser } = payload;
      return { ...state, idUser, hashUser, logged: true };
    }

    case '@user/SINGN_OUT': {
      return { ...state, idUser: null, hashUser: null, logged: false };
    }

    default:
      return state;
  }
}
