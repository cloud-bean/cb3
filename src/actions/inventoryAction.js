import $ from 'jquery';
import { REQUEST_POSTS, RECEIVE_POSTS } from './actionNames';
import * as service from '../ajaxService/service';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export function receivePosts(inventory) {
  return {
    type: RECEIVE_POSTS,
    items: inventory,
    receivedAt: Date.now()
  }
}

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(url) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(requestPosts())

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return $.get(url, (result)=>{
              dispatch(receivePosts(result));
            });


      // 在实际应用中，还需要
      // 捕获网络请求的异常。
  }
}

export const RECORDS_REQUEST = 'RECORDS_REQUEST';
export const RECORDS_SUCCESS = 'RECORDS_SUCCESS';
export const RECORDS_FAILURE = 'RECORDS_FAILURE';

export function RecordsRequest() {
    return {
        type: RECORDS_REQUEST
    }
}
export function RecordsSuccess(records) {
    return {
        type: RECORDS_SUCCESS,
        rentRecords: records
    }
}
export function RecordsFailure(err) {
    return {
        type: RECORDS_FAILURE,
        status: err
    }
}
export function fetchRecords(memberid) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(RecordsRequest());
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.getRentedBookOfMember(memberid).then((value)=> {
            dispatch(RecordsSuccess(value));
        }, (err)=> {
            RecordsFailure(err);
        });
    }
}

export const BOOK_REQUEST = 'BOOK_REQUEST';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_FAILURE = 'BOOK_FAILURE';

export function BookRequest() {
    return {
        type: BOOK_REQUEST
    }
}
export function BookSuccess(book) {
    return {
        type: BOOK_SUCCESS,
        book: book
    }
}
export function BookFailure(err) {
    return {
        type: BOOK_FAILURE,
        status: err
    }
}
export function fetchBook(bookid) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(BookRequest());
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.getBookbyId(bookid).then((value)=> {
            dispatch(BookSuccess(value));
        }, (err)=> {
            BookFailure(err);
        });
    }
}
