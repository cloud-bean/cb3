import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actionNames';
import {routeReducer} from 'redux-simple-router';

const defaultState = {
  isFetching: false,
  items: []
};

export default function postsReducer(state=defaultState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
};

// const CloudbeanApp = combineReducers(Object.assign({},{postsReducer},{
//   routing: routeReducer
// }));

// export default
