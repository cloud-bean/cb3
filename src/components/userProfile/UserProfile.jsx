import React from 'react';
import WeUI from 'react-weui';
import { connect} from 'react-redux';
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;
import './UserProfile.scss';

export default class UserProfile extends React.Component {
	render(){
		const {user,rentCount} = this.props.userStore;
		return (
        <section>
                <CellsTitle>用户信息</CellsTitle>
                <Cells access>
                    <Cell className="list_item">
                        <CellBody>
                            <h2 className="title">{user.baby_name}（已借{rentCount}/4）</h2>
                            <p className="desc">{user.card_number}</p>
                        </CellBody>
                    </Cell>
                </Cells>
        </section>
		)
	}
}

