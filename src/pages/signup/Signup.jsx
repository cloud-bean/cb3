import React from 'react';
import {Link,browserHistory} from 'react-router';
import WeUI from 'react-weui';
import store from '../../reduxStore';
import {fetchUser} from '../../actions/userAction';
import {showAlert,showLoading} from '../../actions/promptAction';
import {connect} from 'react-redux';
const {Button,ButtonArea,Toast,Dialog} = WeUI;
const {Alert} = Dialog;
import PageHeader from '../../components/pageHeader/pageHeader';
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            alert: {
                buttons: [
                    {
                        label: '好的',
                        onClick: this.hideAlert.bind(this)
                    }
                ]
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({phone: e.target.value}, function (err) {
        });
    }

    hideAlert() {
        this.props.dispatch(showAlert(false));
    }

    handleClick() {
        const dispatch = this.props.dispatch;
        dispatch(showLoading(true));
        dispatch(fetchUser(this.state.phone))
            .then((value)=> {
                dispatch(showLoading(false));
                browserHistory.push('/main');
            })
            .fail((err)=> {
                console.log(err);
                dispatch(showLoading(false));
                dispatch(showAlert(true, '提示', err.responseText))
            });
    }

    render() {
        const {prompt} = this.props;
        return (

            <div className='container'>
                <Alert
                    show={prompt.alert.show}
                    title={prompt.alert.title}
                    buttons={this.state.alert.buttons}>
                    {prompt.alert.content}
                </Alert>
                <Toast icon="loading" show={prompt.loading}>
                    正在加载中...
                </Toast>

                <PageHeader text="用户登录"/>

                <div className="weui_cells weui_cells_form">
                    <div className="weui_cell">
                        <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input ref="phone" className="weui_input"
                                   onChange={this.handleChange} type="tel" placeholder="请输入手机号"/>
                        </div>
                    </div>
                </div>
                <div className="weui_cells_tips">请输入您注册会员时的手机号</div>

                <div className="weui_btn_area">
                    <Button onClick={this.handleClick}>确定</Button>
                </div>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    return {
        prompt: state.prompt
    };
}
export default connect(mapStateIntoModuleProps)(Signup);
