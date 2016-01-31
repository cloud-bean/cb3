import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './UserProfile';
import * as service from '../ajaxService/service'
import {connect} from 'react-redux';

import 'weui';

const {Button,ButtonArea,Page} = WeUI;




export  class Main extends React.Component{
	constructor(){
		super();
	}
	// test(){
	// 	service.getRentedBookOfMember('5513a00900445c417e01d805').then((value)=>{
	// 		console.log(value);
	// 	},(err)=>{
	// 		console.log('err');
	// 		console.log(err);
	// 	});
	// };
	render() {
		const {dispatch, user, loading} = this.props;
		return (
<div>
		<UserProfile userName={user.baby_name}></UserProfile>
		<div className="button" spacing>
			<Link to="/borrow"><Button>借书</Button></Link>
			<Link to="/return"><Button type='warn' style={{marginTop:'10px'}}>还书</Button></Link>
			<Button onClick={this.test} style={{marginTop:'10px'}}>test</Button>
			<Toast icon="loading" show={loading}>正在加载中...</Toast>
		</div>
</div>

		);
	}
};

function mapStateIntoModuleProps(state) {
  return {
    user: state.user,
    loading: state.loading
  };
}

export default connect(mapStateIntoModuleProps)(Main);
