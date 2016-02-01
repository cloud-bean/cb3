import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import SearchBar from './../../components/SearchBar';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
const {Button,ButtonArea} = WeUI;
export default class Return extends React.Component {
    render() {
        return (
            <div>
              <UserProfile user={this.props.user}></UserProfile>
              <SearchBar></SearchBar>
              <BookList></BookList>
                <ButtonArea>
                    <Button>确认借阅</Button>
                </ButtonArea>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    const userStore = state.userStore;
    return {
        user: userStore.user,
        loading: userStore.loading
    };
}
export default connect(mapStateIntoModuleProps)(Return);
