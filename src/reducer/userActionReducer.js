import { USER_REQUEST,USER_SUCCESS,USER_FAILURE ,SET_USER_RENTCOUNT} from '../actions/userAction';
import $ from 'jquery';

const initialState = {
  user:{},
  status:'success',
  rentCount:0,
};

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      return $.extend({}, state, {
        status:'start'
      });
    case USER_SUCCESS:
      return $.extend({}, state, {
        status:'success',
        user:action.user.member,
        rentCount:action.user.rentCount,
      });
    case USER_FAILURE:
      return $.extend({}, state, {
        status:action.err,
      });
    case SET_USER_RENTCOUNT:
      if(action.value=='add'){
         return $.extend({}, state, {
          rentCount:state.rentCount+1,
        });
      }else if(action.value=='min'){
         return $.extend({}, state, {
          rentCount:state.rentCount-1,
        });
      }
    default:
      return state;
  }
};
