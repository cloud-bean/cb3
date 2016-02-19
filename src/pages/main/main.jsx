import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './../../components/userProfile/UserProfile';
import {getRecords} from '../../actions/inventoryAction';

import * as service from '../../ajaxService/service';
import {connect} from 'react-redux';
import {showAlert,showLoading} from '../../actions/promptAction';

const {Button, Toast,Dialog} = WeUI;
const {Alert} = Dialog;
import './Main.scss';
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
    handleClick() {
        // this.props.dispatch(fetchRecords(this.props.user._id));
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
                            <Link to="/borrow"><Button >借书</Button></Link>
                            <Link to="/return"><Button type='warn' style={{marginTop:'10px'}} onClick={e=>this.handleClick(e)}>还书</Button></Link>
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
