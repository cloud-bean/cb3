import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actionNames';
import {INVENTORY_REQUEST,INVENTORY_SUCCESS,INVENTORY_FAILURE} from '../actions/inventoryAction'

const defaultState = {
  isFetching: false,
  items: [],
  loading:false,
  rentList:[],
  status:'',
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
    case INVENTORY_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case INVENTORY_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        status: 'success',
        rentList: action.rentList,
      });
    case INVENTORY_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: action.err,
      });
    default:
      return state;
  }
};
