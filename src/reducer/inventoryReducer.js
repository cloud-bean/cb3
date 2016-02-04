
import {GET_RECORDS_REQUEST,GET_RECORDS_SUCCESS,GET_RECORDS_FAILURE} from '../actions/inventoryAction';
import {ADD_WANTEDBOOK_REQUEST,ADD_WANTEDBOOK_SUCCESS,ADD_WANTEDBOOK_FAILURE,SELECT_BOOK} from '../actions/inventoryAction';
import {BORROW_BOOK_REQUEST,BORROW_BOOK_SUCCESS,BORROW_BOOK_FAILURE} from '../actions/inventoryAction';
import {RETURN_BOOK_REQUEST,RETURN_BOOK_SUCCESS,RETURN_BOOK_FAILURE} from '../actions/inventoryAction';
import _ from 'underscore';

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
        status:'start'
      });
    case GET_RECORDS_SUCCESS:
      let rentRecords = action.rentRecords;
      let unReturnBooks = [];
      rentRecords.map((records)=>{
        if(records.status==='R'){
          unReturnBooks.push({book:records.inventory,isSelected:true,recordId:records._id})
        }
      })
    //  const rentCount = unReturnBooks.length;
      return Object.assign({}, state, {
        status: 'success',
        rentRecords: action.rentRecords,
        unReturnBooks:unReturnBooks
      });
    case GET_RECORDS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
      });


    case ADD_WANTEDBOOK_REQUEST:
      return Object.assign({}, state, {
        status:'start'
      });
    case ADD_WANTEDBOOK_SUCCESS:
      let wantedBooks = state.wantedBooks;
      let duplicateFlag = false;
      _.each(wantedBooks,(wantedBook)=>{
        if(wantedBook.book._id==action.book._id){
          duplicateFlag=true;
        }
      });
      if(duplicateFlag==false){
        wantedBooks.push({book:action.book,isSelected:true});
      }
      return Object.assign({}, state, {
        status: 'success',
        wantedBooks: wantedBooks,
      });
    case ADD_WANTEDBOOK_FAILURE:
      return Object.assign({}, state, {
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
    case BORROW_BOOK_REQUEST:
      return Object.assign({}, state, {
        status: 'start',
      });
    case BORROW_BOOK_SUCCESS:
      let curBorrowIndex = 0;
      for (let [index,elem] of state.wantedBooks.entries()){
        if(action.record.inventory._id == elem.book._id){
          curBorrowIndex=index;
        }
      }
      let newWantedBooks = [...state.wantedBooks.slice(0,curBorrowIndex),...state.wantedBooks.slice(curBorrowIndex+1)];
      return Object.assign({}, state, {
        status: 'success',
        wantedBooks:newWantedBooks,
      });
    case BORROW_BOOK_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
      });

    case RETURN_BOOK_REQUEST:
      return Object.assign({}, state, {
        status: 'start',
      });
    case RETURN_BOOK_SUCCESS:
      let curReturnIndex = 0;
      for (let [index,elem] of state.unReturnBooks.entries()){
        if(action.record.inventory._id == elem.book._id){
          curReturnIndex=index;
        }
      }
      console.log('curReturnIndex',curReturnIndex);
      console.log(state);

      let newUnreturnBooks = [...state.unReturnBooks.slice(0,curReturnIndex),...state.unReturnBooks.slice(curReturnIndex+1)];
      console.log(newUnreturnBooks);
      return Object.assign({}, state, {
        status: 'success',
        unReturnBooks:newUnreturnBooks,
      });
    case RETURN_BOOK_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
      });
    default:
      return state;
  }
};
