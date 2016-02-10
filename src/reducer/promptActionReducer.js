import {SHOW_ALERT,SHOW_LOADING} from '../actions/promptAction';
import $ from 'jquery';

const initialState = {
  alert:{},
  loading: false,
};

export default function promptReducer(state=initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return $.extend({}, state, {
        alert:{
          show:action.show,
          title:action.title,
          content:action.content
        }
      });
    case SHOW_LOADING:
      return $.extend({}, state, {
        loading: action.show,
      });
    default:
      return state;
  }
};
