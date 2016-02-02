import React from 'react';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {fetchBook} from '../actions/inventoryAction';

const {Button,ButtonArea} = WeUI;
export class SearchBar extends React.Component {
    handleClick(e){
        const invCode = findDOMNode(this.refs.invCode).value.trim();
        console.log(invCode);
        this.props.dispatch(fetchBook(invCode));
    }
    render() {
        return (
            <div className="weui_cells weui_cells_form">
                <div className="weui_cell">
                    <div className="weui_cell_hd"><label >云豆编号</label></div>
                    <div className="weui_cell_bd weui_cell_primary">
                        <input className="weui_input" type="tel" placeholder="请输入云豆编号" ref='invCode'/>
                    </div>
                </div>
                <ButtonArea>
                    <Button plain="true">扫描</Button>
                    <Button plain="true" onClick={e=>this.handleClick(e)}>添加</Button>
                </ButtonArea>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
  return {
  };
}

export default connect(mapStateIntoModuleProps)(SearchBar);
