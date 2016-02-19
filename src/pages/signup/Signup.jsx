import React from 'react';
import {Link,browserHistory} from 'react-router';
import WeUI from 'react-weui';
import store from '../../reduxStore';
import {fetchUser} from '../../actions/userAction';
import {getRecords} from '../../actions/inventoryAction';
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
        if(this.state.phone){
          dispatch(showLoading(true));
          dispatch(fetchUser(this.state.phone))
              .then((value)=> {
                  dispatch(getRecords(this.props.userStore.user._id))
              })
              .then((value)=>{
                  dispatch(showLoading(false));
                  if(this.props.userStore.user.locked==false){
                    browserHistory.push('/main');
                  }else{
                    dispatch(showAlert(true, '提示', '亲爱的老会员您好，您的账户目前不可用，需要任何帮助请拨打服务热线：15389088570'));
                  }
              })
              .fail((err)=> {
                  dispatch(showLoading(false));
                  dispatch(showAlert(true, '提示', err.responseText))
              });
        }else{
          dispatch(showAlert(true, '提示', '请填写手机号'));
        }

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

                <PageHeader text="绘本自助借阅"/>

                <div className="weui_cells weui_cells_form">
                    <div className="weui_cell">
                        <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input ref="phone" className="weui_input"
                                   onChange={this.handleChange} type="tel" placeholder="输入您注册会员时的手机号"/>
                        </div>
                    </div>
                </div>
                <div className="weui_btn_area">
                    <Button onClick={this.handleClick}>确定</Button>
                </div>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    return {
        userStore : state.userStore,
        prompt: state.prompt
    };
}
export default connect(mapStateIntoModuleProps)(Signup);
