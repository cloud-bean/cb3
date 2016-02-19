import React from 'react';
import './pageHeader.scss';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <h2 className="pageHeader">{this.props.text}</h2>
                <p className="sub_title">云豆绘本馆</p>
            </div>
        )
    }
}