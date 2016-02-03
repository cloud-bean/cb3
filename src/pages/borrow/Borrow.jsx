import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import AddBookBar from './../../components/AddBookBar';
import {addWantedBook,selectBook} from '../../actions/inventoryAction';
import WeUI from 'react-weui';
import {connect} from 'react-redux';

const {Button,ButtonArea,Toast} = WeUI;

export  class Borrow extends React.Component {
    handleClick(e){
      //this.props.dispatch();
    }
    render() {
        const {loading,wantedBooks,dispatch,userStore} = this.props;
        return (
            <div>
              <Toast icon="loading" show={loading}>
                  正在加载中...
              </Toast>
              <UserProfile userStore={userStore}></UserProfile>
              <AddBookBar onAddClick={invCode=>dispatch(addWantedBook(invCode))}></AddBookBar>
              <BookList listName='预借阅列表' books={wantedBooks} onSelect={index=>dispatch(selectBook(index,'borrow'))}> </BookList>
                <ButtonArea>
                    <Button>确认借阅</Button>
                </ButtonArea>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    const inventoryStore = state.inventoryStore;
    return {
        userStore:state.userStore,
        loading: inventoryStore.loading,
        wantedBooks:inventoryStore.wantedBooks,
    };
}
export default connect(mapStateIntoModuleProps)(Borrow);
