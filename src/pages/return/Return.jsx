import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import BookItem from './../../components/BookItem';
import WeUI from 'react-weui';

const {Button,ButtonArea} = WeUI;

export default class Return extends React.Component {
    render() {
        return (
            <div>
                <BookList></BookList>
                <ButtonArea>
                    <Button>归还图书</Button>
                </ButtonArea>
            </div>
        )
    }
}
