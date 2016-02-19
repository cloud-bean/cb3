import $ from 'jquery';
import * as service from '../ajaxService/service';
import {showAlert,showLoading} from './promptAction';
// export function requestPosts() {
//   return {
//     type: REQUEST_POSTS,
//   }
// }
//
// export function receivePosts(inventory) {
//   return {
//     type: RECEIVE_POSTS,
//     items: inventory,
//     receivedAt: Date.now()
//   }
// }
//
// // 来看一下我们写的第一个 thunk action creator！
// // 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// // store.dispatch(fetchPosts('reactjs'))
//
// export function fetchPosts(url) {
//
//   // Thunk middleware 知道如何处理函数。
//   // 这里把 dispatch 方法通过参数的形式传给函数，
//   // 以此来让它自己也能 dispatch action。
//
//   return function (dispatch) {
//
//     // 首次 dispatch：更新应用的 state 来通知
//     // API 请求发起了。
//
//     dispatch(requestPosts())
//
//     // thunk middleware 调用的函数可以有返回值，
//     // 它会被当作 dispatch 方法的返回值传递。
//
//     // 这个案例中，我们返回一个等待处理的 promise。
//     // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
//
//     return $.get(url, (result)=>{
//               dispatch(receivePosts(result));
//             });
//
//
//       // 在实际应用中，还需要
//       // 捕获网络请求的异常。
//   }
// }

/**
 * 获取用户借阅记录
 * @param memberid 用户ID
 * @returns {*}
 */
export const GET_RECORDS_REQUEST = 'GET_RECORDS_REQUEST';
export const GET_RECORDS_SUCCESS = 'GET_RECORDS_SUCCESS';
export const GET_RECORDS_FAILURE = 'GET_RECORDS_FAILURE';

export function getRecordsRequest() {
    return {
        type: GET_RECORDS_REQUEST
    }
}
export function getRecordsSuccess(records) {
    return {
        type: GET_RECORDS_SUCCESS,
        rentRecords: records
    }
}
export function getRecordsFailure(err) {
    return {
        type: GET_RECORDS_FAILURE,
        status: err
    }
}
export function getRecords(memberid) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(getRecordsRequest());
        dispatch(showLoading(true));
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.getRentedBookOfMember(memberid).then((value)=> {
            dispatch(getRecordsSuccess(value));
            dispatch(showLoading(false));
        }, (err)=> {
            dispatch(getRecordsFailure(err));
            dispatch(showLoading(false));
        });
    }
}

/**
 * 添加图书
 * @param recordId：记录id号
 * @param recordBookName 归还的图书的名字，方便返回提示信息。
 * @returns {*}
 */
export const ADD_WANTEDBOOK_REQUEST = 'ADD_WANTEDBOOK_REQUEST';
export const ADD_WANTEDBOOK_SUCCESS = 'ADD_WANTEDBOOK_SUCCESS';
export const ADD_WANTEDBOOK_FAILURE = 'ADD_WANTEDBOOK_FAILURE';

export function addWantedBookRequest() {
    return {
        type: ADD_WANTEDBOOK_REQUEST
    }
}
export function addWantedBookSuccess(book) {
    return {
        type: ADD_WANTEDBOOK_SUCCESS,
        book: book
    }
}
export function addWantedBookFailure(err) {
    return {
        type: ADD_WANTEDBOOK_FAILURE,
        status: err
    }
}
export function addWantedBook(bookid) {
    return function (dispatch) {
        if (bookid.length === 0) {
            return dispatch(showAlert(true,'警告','请输入图书编码'));
        }
        dispatch(addWantedBookRequest());
        dispatch(showLoading(true));
        return service.getBookbyId(bookid).then((book)=> {
            dispatch(showLoading(false));
          if(book.isRent===false){
            dispatch(addWantedBookSuccess(book));
          }else{
            dispatch(showAlert(true,'警告','所选图书已借出'));
          }
        }).fail((err)=> {
            dispatch(showLoading(false));
            dispatch(showAlert(true, '提示', err.responseText))
            dispatch(addWantedBookFailure(err));
        });
    }
}

export const SELECT_BOOK = 'SELECT_BOOK';
export function selectBook(index,page){
  return {
    type:SELECT_BOOK,
    page,
    index,
  }
}

export const BORROW_BOOK_REQUEST = 'BORROW_BOOK_REQUEST';
export const BORROW_BOOK_SUCCESS = 'BORROW_BOOK_SUCCESS';
export const BORROW_BOOK_FAILURE = 'BORROW_BOOK_FAILURE';

export function borrowBookRequest() {
    return {
        type: BORROW_BOOK_REQUEST
    }
}
export function borrowBookSuccess(record) {
    return {
        type: BORROW_BOOK_SUCCESS,
        record
    }
}
export function borrowBookFailure(err) {
    return {
        type: BORROW_BOOK_FAILURE,
        status: err
    }
}

export function borrowBook(memberId,bookId,bookName) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(borrowBookRequest());
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.borrowBook(memberId,bookId,bookName).then((value)=> {
            dispatch(borrowBookSuccess(value));
        }).fail((err)=> {
          //todo: 判断err.readystate 来处理不同错误
            dispatch(showLoading(false));
            dispatch(showAlert(true, '提示', err.responseText))
            dispatch(borrowBookFailure(err));
        });
    }
}

export const RETURN_BOOK_REQUEST = 'RETURN_BOOK_REQUEST';
export const RETURN_BOOK_SUCCESS = 'RETURN_BOOK_SUCCESS';
export const RETURN_BOOK_FAILURE = 'RETURN_BOOK_FAILURE';

export function returnBookRequest() {
    return {
        type: RETURN_BOOK_REQUEST
    }
}
export function returnBookSuccess(record) {
    return {
        type: RETURN_BOOK_SUCCESS,
        record
    }
}
export function returnBookFailure(err) {
    return {
        type: RETURN_BOOK_FAILURE,
        status: err
    }
}

export function returnBook(recordId,bookName) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return dispatch=>{
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(returnBookRequest());
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return service.returnBook(recordId).then((value)=> {
            console.log(value);
            dispatch(returnBookSuccess(value));
        });
    }
}
