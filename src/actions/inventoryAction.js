import $ from 'jquery';


export const GET_INVENTORY = 'GET_INVENTORY';



export const REQUEST_POSTS = 'REQUEST_POSTS';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,  
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(inventory) {
  return {
    type: RECEIVE_POSTS,
    items: inventory,
    receivedAt: Date.now()
  }
}


const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/10';

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts() {

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

    return $.get(getTop25InventoryUrl, (result)=>{
              dispatch(receivePosts(result));
            });


      // 在实际应用中，还需要
      // 捕获网络请求的异常。
  }
}
