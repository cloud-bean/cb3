import $ from 'jquery';
import { LOGIN } from './actionNames';
import * as service from '../ajaxService/service'

export function login(user) {
  return {
    type:LOGIN,
    user:user
  }
}




export function fetchMember(phone) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。
    // dispatch(requestPosts())

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return service.getMembyPhone(phone).then((value)=>{
			         dispatch(login(value));
		        },(err)=>{
			         console.log('err');
			         console.log(err);
		        });

      // 在实际应用中，还需要
      // 捕获网络请求的异常。
  }
}
