import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actionNames';
import {RECORDS_REQUEST,RECORDS_SUCCESS,RECORDS_FAILURE} from '../actions/inventoryAction'

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
    case RECORDS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case RECORDS_SUCCESS:
      console.log('records',action.rentRecords);
      let rentRecords = action.rentRecords;
      let unReturnBooks = [];
      rentRecords.map((records)=>{
        if(records.status==='R'){
          unReturnBooks.push(records.inventory)
        }
      })
    //  const rentCount = unReturnBooks.length;
      return Object.assign({}, state, {
        loading: false,
        status: 'success',
        rentRecords: action.rentRecords,
        unReturnBooks:unReturnBooks
      });
    case RECORDS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: action.err,
      });
    default:
      return state;
  }
};
