import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import {connect} from 'react-redux';
import WeUI from 'react-weui';

const {Button,ButtonArea,Toast} = WeUI;

export  class Return extends React.Component {
    render() {
        const {user,loading,unReturnBooks,dispatch,rentCount} = this.props;

        console.log(unReturnBooks);
        return (
            <div>
              { loading ?
                  <Toast icon="loading" show={true}>
                      正在加载中...
                  </Toast>
                  :
                  <div>
                <UserProfile user={user} rentCount={rentCount}></UserProfile>
                <BookList books={unReturnBooks}> </BookList>
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
        loading: inventoryStore.loading,
        rentCount:userStore.rentCount,
        unReturnBooks:inventoryStore.unReturnBooks,
    };
}
export default connect(mapStateIntoModuleProps)(Return);
