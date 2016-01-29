import React from 'react';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,Icon} = WeUI;

export default class BookItem extends React.Component {
	render(){
		console.log(this.props.bookName);
		return (
      <div>
        <div className="weui_cells weui_cells_form">
          <div className="weui_cell weui_cell_switch">
            <div className="weui_cell_hd weui_cell_primary">{this.props.bookName}</div>
            <div className="weui_cell_ft">
              <input className="weui_switch" type="checkbox"/>
            </div>
          </div>

        </div>

      </div>
		)
	}
}
