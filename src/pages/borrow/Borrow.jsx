import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import SearchBar from './../../components/SearchBar';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
const {Button,ButtonArea,Toast} = WeUI;
export  class Borrow extends React.Component {
    handleClick(e){
    }
    render() {
        const {loading,wantToRent} = this.props;
        return (
            <div>
              <UserProfile></UserProfile>
              <SearchBar></SearchBar>
                <Toast icon="loading" show={loading}>
                    正在加载中...
                </Toast>
              <BookList books={wantToRent}></BookList>
                <ButtonArea>
                    <Button onClick={e=>this.handleClick(e)}>确认借阅</Button>
                </ButtonArea>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    const inventoryStore = state.inventoryStore;
    return {
        loading: inventoryStore.loading,
        wantToRent:inventoryStore.wantToRent,
    };
}
export default connect(mapStateIntoModuleProps)(Borrow);
