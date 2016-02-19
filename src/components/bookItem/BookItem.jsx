import React from 'react';
import WeUI from 'react-weui';
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,Icon} = WeUI;
import './BookItem.scss';

export default class BookItem extends React.Component {
    render() {
        return (
            <div>
                    <div className="weui_cell">
                        <div className="weui_cell_hd weui_cell_primary">{this.props.book.name} &nbsp;<span className='desc'> {this.props.book.inv_code} </span></div>
                        {this.props.hasCheckedButton?
                          <div className="weui_cell_ft">
                              <input onChange={this.props.onChange} className="weui_switch" type="checkbox" checked={this.props.checked}/>
                          </div>
                          :
                          <div></div>
                        }
                    </div>
            </div>
        )
    }
}
