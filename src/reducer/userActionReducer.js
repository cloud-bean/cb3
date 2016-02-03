import { USER_REQUEST,USER_SUCCESS,USER_FAILURE } from '../actions/userAction';


const initialState = {
  user:{},
  status:'success',
  rentCount:0,
};

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {
        status:'start'
      });
    case USER_SUCCESS:
      return Object.assign({}, state, {
        status:'success',
        user:action.user.member,
        rentCount:action.user.rentCount,
      });
    case USER_FAILURE:
      return Object.assign({}, state, {
        status:action.err,
      });
    default:
      return state;
  }
};
