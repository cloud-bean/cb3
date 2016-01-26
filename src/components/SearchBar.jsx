import React from 'react';
import WeUI from 'react-weui';


const {Button} = WeUI;
export default class SearchBar extends React.Component {
	render(){
		return (
      <div className="weui_cells weui_cells_form">
            <div className="weui_cell">
                <div className="weui_cell_hd"><label class="weui_label">云豆编号</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="tel" placeholder="请输入云豆编号"/>
                </div>
            </div>
            <Button plain="true">扫描</Button>
            <Button plain="true">添加</Button>
      </div>
		)
	}
}
