import React from 'react';
import UserProfile from './UserProfile';
import BookList from './BookList';
import BookItem from './BookItem';
import WeUI from 'react-weui';

const {Button} = WeUI;



export default class Return extends React.Component {
	render(){
		return (
			<div>
			<UserProfile></UserProfile>
			<BookList></BookList>
			<Button>归还图书</Button>
			</div>
		)
	}
}
