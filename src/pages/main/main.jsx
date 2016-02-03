import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './../../components/userProfile/UserProfile';
import {fetchRecords} from '../../actions/inventoryAction';
import * as service from '../../ajaxService/service';
import {connect} from 'react-redux';
import 'weui';
const {Button, Toast,Alert} = WeUI;
import './Main.scss';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        // this.props.dispatch(fetchRecords(this.props.user._id));
    }

    render() {
        const {dispatch,userStore} = this.props;
        return (
            <div>
                { userStore.loading ?
                    <Toast icon="loading" show={true}>
                        正在加载中...
                    </Toast>
                    :
                    <div>
                        <UserProfile userStore={userStore}></UserProfile>
                        <div className="button" spacing>
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
    };
}
export default connect(mapStateIntoModuleProps)(Main);
