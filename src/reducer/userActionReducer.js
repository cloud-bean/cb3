import { LOGIN } from '../actions/actionNames';

const defaultState = {
  user:{},
  loading: false,
};




export default function loginReducer(state=defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};
