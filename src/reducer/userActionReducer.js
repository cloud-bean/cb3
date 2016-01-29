import { LOGIN } from '../actions/actionNames';

const defaultState = {
  loading: false,
};

export default function loginReducer(state={}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};
