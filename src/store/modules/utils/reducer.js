const INITIAL_STATE = {
  location: null,
};

export default function deliveries(state = INITIAL_STATE, { type, location }) {
  switch (type) {
    case '@utils/ADD_LOCATION':
      return { ...state, location };
    default:
      return state;
  }
}
