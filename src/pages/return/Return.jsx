import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import {connect} from 'react-redux';
import WeUI from 'react-weui';

const {Button,ButtonArea} = WeUI;

export  class Return extends React.Component {
    render() {
        const {user,loading,rentList,dispatch} = this.props;
        let books = [];
        rentList.map((records)=>{
          if(records.status==='R'){
            books.push(records.inventory)
          }
        })
        return (
            <div>
              { loading ?
                  <Toast icon="loading">
                      正在加载中...
                  </Toast>
                  :
                <div>
                <UserProfile user={user}></UserProfile>
                <BookList books={books}> </BookList>
                <ButtonArea>
                    <Button>归还图书</Button>
                </ButtonArea>
                </div>
              }
            </div>
        )
    }
}

function mapStateIntoModuleProps(state) {
    const userStore = state.userStore;
    const inventoryStore = state.inventoryStore;
    return {
        user: userStore.user,
        loading: userStore.loading,
        rentList:inventoryStore.rentList,
    };
}
export default connect(mapStateIntoModuleProps)(Return);
