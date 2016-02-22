import React from 'react';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';


const {Button,ButtonArea} = WeUI;
export default class AddBookBar extends React.Component {
    handleClick(e){
        const invCode = findDOMNode(this.refs.invCode).value.trim();
        findDOMNode(this.refs.invCode).value='';
        this.props.onAddClick(invCode);
    }
    handleScanClick(e){
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr;
          findDOMNode(this.refs.invCode).value = result.split(',')[1]; // 当needResult 为 1 时，扫码返回的结果
        }
      });
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
                    <Button plain="true" id='scanQRCode0' onClick={e=>this.handleScanClick(e)}>扫描</Button>
                    <Button plain="true" onClick={e=>this.handleClick(e)}>添加至预借阅列表</Button>
                </ButtonArea>
            </div>
        )
    }
}
// function mapStateIntoModuleProps(state) {
//   return {
//   };
// }
//
// export default connect(mapStateIntoModuleProps)(SearchBar);
