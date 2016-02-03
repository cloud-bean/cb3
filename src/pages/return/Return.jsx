import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import {selectBook} from '../../actions/inventoryAction';
import {connect} from 'react-redux';
import {getRecords} from '../../actions/inventoryAction';
import WeUI from 'react-weui';

const {Button,ButtonArea,Toast} = WeUI;

export  class Return extends React.Component {
    componentDidMount(){
      this.props.dispatch(getRecords(this.props.userStore.user._id))
    }
    render() {
        const {loading,unReturnBooks,dispatch,userStore} = this.props;
        console.log('unReturnBooks',unReturnBooks);
        return (
            <div>
              { loading ?
                  <Toast icon="loading" show={true}>
                      正在加载中...
                  </Toast>
                  :
                  <div>
                <UserProfile userStore={userStore}></UserProfile>
                <BookList listName='还书列表' books={unReturnBooks} onSelect={index=>dispatch(selectBook(index,'return'))}> </BookList>
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
        userStore : userStore,
        loading: inventoryStore.loading,
        unReturnBooks:inventoryStore.unReturnBooks,
    };
}
export default connect(mapStateIntoModuleProps)(Return);
