import React from 'react';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

export default class UserProfile extends React.Component {
	render(){
		return (
        <section>
                <CellsTitle>用户信息</CellsTitle>
                <Cells access>
                    <Cell className="list_item">
                        <CellBody>
                            <h2 className="title">辛那克斯（已借3/4）</h2>
                            <p className="desc">15349216763</p>
                        </CellBody>
                    </Cell>
                </Cells>
        </section>
		)
	}
}
