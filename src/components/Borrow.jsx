import React from 'react';
import UserProfile from './UserProfile';
import BookList from './BookList';
import BookItem from './BookItem';
import SearchBar from './SearchBar';
import WeUI from 'react-weui';

const {Button,ButtonArea} = WeUI;



export default class Return extends React.Component {
	render(){
		return (
			<div>
			<UserProfile></UserProfile>
			<SearchBar></SearchBar>
			<BookList></BookList>
		<ButtonArea>
			<Button>确认借阅</Button>
		</ButtonArea>
			</div>
		)
	}
}
