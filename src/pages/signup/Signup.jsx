import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import store from '../../reduxStore';
import {fetchUser} from '../../actions/userAction'
import {connect} from 'react-redux';

const {Button,ButtonArea,Toast} = WeUI;


class Signup extends React.Component {
	constructor(){
		super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
	}

    handleChange(e){
        this.setState({phone: e.target.value}, function (err){
        });
    }

    handleClick() {
			const dispatch = this.props.dispatch;
        dispatch(fetchUser(this.state.phone));
				// .then(()=>{
				// 	  // dispatch(fetchRecords(store.getState().userStore.user._id)).then(()=>{
				// 		// 		console.log(store.getState());
				// 		// });
				//
				// });
    }

	render(){
		return (
			<div className='container'>
                <div className="page">
                    <div className="bd">
                        <div className="weui_cells_title">用户登录</div>
                            <div className="weui_cells weui_cells_form">
                            <div className="weui_cell">
                                <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                                            <div className="weui_cell_bd weui_cell_primary">
                                    <input ref="phone" className="weui_input" onChange={this.handleChange} type="tel" placeholder="请输入手机号" />
                                </div>
                            </div>
                        </div>
                        <div className="weui_cells_tips">请输入您注册会员时的手机号</div>
                            <div className="weui_btn_area">
                              <Link to="/main">  <Button onClick={this.handleClick}>确定</Button></Link>
                        </div>
                    </div>
                </div>
			</div>
		)
	}


}

function mapStateIntoModuleProps(state) {
  return {
  };
}

export default connect(mapStateIntoModuleProps)(Signup);
