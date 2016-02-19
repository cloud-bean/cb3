import $ from 'jquery';
import {showAlert,showLoading} from './promptAction';
import * as service from '../ajaxService/service'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export function userRequest() {
    return {
        type: USER_REQUEST
    }
}
export function userSuccess(user) {
    return {
        type: USER_SUCCESS,
        user: user
    }
}
export function userFailure(err) {
    return {
        type: USER_FAILURE,
        status: err
    }
}
export function fetchUser(phone) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(userRequest());

        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.getMembyPhone(phone).then((value)=> {
            dispatch(userSuccess(value));
            console.log(value);
            // dispatch(showLoading(false));
        }
        // , (err)=> {
        //     dispatch(userFailure(err));
        //     // dispatch(showLoading(false));
        // }
      );
    }
}

export const SET_USER_RENTCOUNT = 'SET_USER_RENTCOUNT';
export function setUserRentCount(value) {
    return {
        type: SET_USER_RENTCOUNT,
        value

    }
}
