import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import SearchBar from './../../components/SearchBar';
import WeUI from 'react-weui';
const {Button,ButtonArea} = WeUI;
export default class Return extends React.Component {
    render() {
        return (
            <div>

                <ButtonArea>
                    <Button>确认借阅</Button>
                </ButtonArea>
            </div>
        )
    }
}
