import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function () {
		return (
			<div>
				<h1>cloud-bean</h1>
				<ul className="menu">
					<li><Link to="/">Dashboard</Link></li>
					<li><Link to="/member">Member</Link></li>
					<li><Link to="/inventory">Inventory</Link></li>
					<li><Link to="/help">Help</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
});