import React from 'react';
import {Link,browserHistory} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './../../components/userProfile/UserProfile';
import {getRecords} from '../../actions/inventoryAction';

import * as service from '../../ajaxService/service';
import {connect} from 'react-redux';
import {showAlert,showLoading} from '../../actions/promptAction';

const {Button, Toast,Dialog} = WeUI;
const {Alert} = Dialog;
import PageHeader from '../../components/pageHeader/pageHeader';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            alert: {
                buttons: [
                    {
                        label: '好的',
                        onClick: this.hideAlert.bind(this)
                    }
                ]
            }
        };
    }
    handleReturnClick() {
         if(this.props.userStore.rentCount===0){
           this.props.dispatch(showAlert(true,'警告','亲，您当前没有需要还的书哦'));
         }else{
           browserHistory.push('/return')
         }
    }
    handleBorrowClick() {
         if(this.props.userStore.rentCount===this.props.userStore.user.max_book){
           this.props.dispatch(showAlert(true,'警告','亲，请先还书否则没法借书哦'));
         }else{
           browserHistory.push('/borrow')
         }
    }
    hideAlert(){
        this.props.dispatch(showAlert(false));
    }
    componentDidMount(){
      this.props.dispatch(getRecords(this.props.userStore.user._id))
    }
    render() {
        const {dispatch,userStore,prompt,unReturnBooks} = this.props;
        return (
            <div>
                <PageHeader text="绘本自助借阅" />
                {prompt.loading ?
                    <Toast icon="loading" show={true}>
                        正在加载中...
                    </Toast>
                    :
                    <div>
                      <Alert
                            show={prompt.alert.show}
                            title={prompt.alert.title}
                            buttons={this.state.alert.buttons}>
                                {prompt.alert.content}
                      </Alert>
                        <UserProfile userStore={userStore}  unReturnBooks={unReturnBooks}></UserProfile>
                        <div className="weui_btn_area">
                            <Button onClick={e=>this.handleBorrowClick(e)}>借书</Button>
                            <Button type='warn' style={{marginTop:'10px'}} onClick={e=>this.handleReturnClick(e)}>还书</Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
function mapStateIntoModuleProps(state) {
    const userStore = state.userStore;
    const inventoryStore =state.inventoryStore;
    return {
        userStore:userStore,
        unReturnBooks:inventoryStore.unReturnBooks,
        prompt:state.prompt,
    };
}
export default connect(mapStateIntoModuleProps)(Main);
