import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './UserProfile';
import 'weui';

const {Button} = WeUI;




export default class Main extends React.Component{
	render() {
		return (

			<div>
				<UserProfile></UserProfile>
				<ul>
					<li><Link to="/borrow"><Button>借书</Button></Link></li>
					<li><Link to="/return"><Button plain="true">还书</Button></Link></li>
				</ul>

			</div>
		);
	}
};
