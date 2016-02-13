import React from 'react';
import './pageHeader.scss';

export default class PageHeader extends React.Component {
    render() {
        return (
            <h2 className="pageHeader">{this.props.text}</h2>
        )
    }
}