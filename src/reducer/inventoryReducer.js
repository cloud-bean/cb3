
import {GET_RECORDS_REQUEST,GET_RECORDS_SUCCESS,GET_RECORDS_FAILURE} from '../actions/inventoryAction';
import {ADD_WANTEDBOOK_REQUEST,ADD_WANTEDBOOK_SUCCESS,ADD_WANTEDBOOK_FAILURE,SELECT_BOOK,RESET_STATUS} from '../actions/inventoryAction'

const initialState = {
  loading:false,
  status:'success',
  unReturnBooks:[],
  wantedBooks:[],
};

export default function inventoryReducer(state=initialState, action) {
  switch (action.type) {
    case GET_RECORDS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_RECORDS_SUCCESS:
      let rentRecords = action.rentRecords;
      let unReturnBooks = [];
      rentRecords.map((records)=>{
        if(records.status==='R'){
          unReturnBooks.push({book:records.inventory,isSelected:true})
        }
      })
    //  const rentCount = unReturnBooks.length;
      return Object.assign({}, state, {
        loading: false,
        status: 'success',
        rentRecords: action.rentRecords,
        unReturnBooks:unReturnBooks
      });
    case GET_RECORDS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
      });


    case ADD_WANTEDBOOK_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case ADD_WANTEDBOOK_SUCCESS:
      let wantedBooks = state.wantedBooks;
      wantedBooks.push({book:action.book,isSelected:true});
      return Object.assign({}, state, {
        loading: false,
        status: 'success',
        wantedBooks: wantedBooks,
      });
    case ADD_WANTEDBOOK_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
      });

    case SELECT_BOOK:{
      if(action.page==='borrow'){
        let currentBook = state.wantedBooks[action.index];
        let newWantedBooks = [
          ...state.wantedBooks.slice(0,action.index),
          Object.assign({},currentBook,{isSelected:!currentBook.isSelected}),
          ...state.wantedBooks.slice(action.index+1)
        ]
        return Object.assign({}, state, {
          wantedBooks:newWantedBooks
        });
      }
      if(action.page==='return'){
        let currentBook = state.unReturnBooks[action.index];
        let newUnreturnBooks = [
          ...state.unReturnBooks.slice(0,action.index),
          Object.assign({},currentBook,{isSelected:!currentBook.isSelected}),
          ...state.unReturnBooks.slice(action.index+1)
        ]
        return Object.assign({}, state, {
          unReturnBooks:newUnreturnBooks
        });
      }
    }
    case RESET_STATUS:
      return Object.assign({}, state, {
        status: 'success',
      });
    default:
      return state;
  }
};
