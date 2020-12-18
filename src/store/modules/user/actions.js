export const signInRequest = (login, senha) => ({
  type: '@user/SIGN_IN_REQUEST',
  payload: { login, senha },
});

export const signInSuccess = (idUser, hashUser) => ({
  type: '@user/SIGN_IN_SUCCCESS',
  payload: { idUser, hashUser },
});

export const signOut = () => ({
  type: '@user/SINGN_OUT',
});

export const setSignInError = signInError => ({
  type: '@user/SIGN_ERROR',
  signInError,
});

export const setLoadingSingin = loadingSingin => ({
  type: '@user/LOADING_SINGIN',
  loadingSingin,
});
