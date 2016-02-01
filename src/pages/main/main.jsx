import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
import UserProfile from './../../components/userProfile/UserProfile';
import * as service from '../../ajaxService/service'
import {connect} from 'react-redux';
import 'weui';
const {Button, Toast} = WeUI;
import './Main.scss';

export class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {dispatch, user, loading} = this.props;
        console.log(loading, user);
        return (
            <div>
                { loading ?
                    <Toast icon="loading">
                        正在加载中...
                    </Toast>
                    :
                    <div>
                        <UserProfile user={user}></UserProfile>
                        <div className="button" spacing>
                            <Link to="/borrow"><Button>借书</Button></Link>
                            <Link to="/return"><Button type='warn' style={{marginTop:'10px'}}>还书</Button></Link>
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
        user: userStore.user,
        loading: userStore.loading
    };
}
export default connect(mapStateIntoModuleProps)(Main);
