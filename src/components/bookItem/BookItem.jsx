import React from 'react';
import './BookItem.scss';
import WeUI from 'react-weui';
const {Button} = WeUI;

export default class BookItem extends React.Component {
    render() {
        let radio_ele;

        if (!this.props.hasCheckedButton) {
            if (this.props.book.fm_radio_url) {
                radio_ele = (
                    <a href={this.props.book.fm_radio_url}>
                        <div className="fm_radio_icon"></div>
                    </a>);
            }
        }

        return (
            <div>
                <div className="weui_cell">
                    <div className="weui_cell_hd weui_cell_primary">{this.props.book.name} &nbsp;
                        {radio_ele}
                        <span className='desc'> {this.props.book.inv_code} </span>

                    </div>
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
