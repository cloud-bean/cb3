import React from 'react';
import WeUI from 'react-weui';
import { connect} from 'react-redux';
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;
import './UserProfile.scss';

export default class UserProfile extends React.Component {
	render(){
		return (
        <section>
                <CellsTitle>用户信息</CellsTitle>
                <Cells access>
                    <Cell className="list_item">
                        <CellBody>
                            <h2 className="title">{this.props.user.baby_name}（已借3/4）</h2>
                            <p className="desc">{this.props.user.card_number}</p>
                        </CellBody>
                    </Cell>
                </Cells>
        </section>
		)
	}
}
