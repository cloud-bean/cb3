import {SHOW_ALERT,SHOW_LOADING} from '../actions/promptAction';

const initialState = {
  alert:{},
  loading: false,
};

export default function promptReducer(state=initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return Object.assign({}, state, {
        alert:{
          show:action.show,
          title:action.title,
          content:action.content
        }
      });
    case SHOW_LOADING:
      return Object.assign({}, state, {
        loading: action.show,
      });
    default:
      return state;
  }
};
