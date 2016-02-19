import React from 'react';
import WeUI from 'react-weui';
import { connect} from 'react-redux';
import BookList from './../../components/BookList';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,Icon} = WeUI;
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
                            <p className="desc">会员卡号:{user.card_number}</p>
                        </CellBody>

                    </Cell>
										{this.props.unReturnBooks?
											<BookList hasCheckedButton={false} listName='已借图书' books={this.props.unReturnBooks} onSelect={index=>dispatch(selectBook(index,'return'))}> </BookList>
										:
											<div></div>
										}
                </Cells>
        </section>
		)
	}
}
