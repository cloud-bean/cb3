import { REQUEST_DASHBOARD_MEMBER_DATA, RECEIVE_DASHBOARD_MEMBER_DATA } from '../actions/actionNames';

const defaultState = {
    isFetching: false,
    items: []
};

export default function dashboardMemberReducer(state=defaultState, action) {
    switch (action.type) {
        case REQUEST_DASHBOARD_MEMBER_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_DASHBOARD_MEMBER_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
            });
        default:
            return state;
    }
};

