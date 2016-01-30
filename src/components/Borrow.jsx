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
			<UserProfile userName='辛那克斯'></UserProfile>
			<SearchBar></SearchBar>
			<BookList></BookList>
		<ButtonArea>
			<Button>确认借阅</Button>
		</ButtonArea>
			</div>
		)
	}
}
