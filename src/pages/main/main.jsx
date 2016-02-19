import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './../../components/userProfile/UserProfile';
import {fetchRecords} from '../../actions/inventoryAction';
import * as service from '../../ajaxService/service';
import {connect} from 'react-redux';

const {Button, Toast,Alert} = WeUI;
import './Main.scss';
import PageHeader from '../../components/pageHeader/pageHeader';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        // this.props.dispatch(fetchRecords(this.props.user._id));
    }

    render() {
        const {dispatch,userStore,prompt} = this.props;
        return (
            <div>
                <PageHeader text="绘本自助借阅" />
                {prompt.loading ?
                    <Toast icon="loading" show={true}>
                        正在加载中...
                    </Toast>
                    :
                    <div>
                        <UserProfile userStore={userStore}></UserProfile>
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
    return {
        userStore:userStore,
        prompt:state.prompt,
    };
}
export default connect(mapStateIntoModuleProps)(Main);
