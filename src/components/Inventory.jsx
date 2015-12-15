import React from 'react';
import $ from 'jquery';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/List';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/25';

var InventoryList = React.createClass({
  render: function () {
    var InventoryNodes = this.props.data.map(function (Inventory, index) {
      return (
        <ListItem
        avatar={Inventory.img_url}
        caption={Inventory.name}
        legend={Inventory.inv_code} />
      );
    })
    return (
      <div>
        <List selectable ripple>
          <ListSubHeader caption='Inventories' />
            {InventoryNodes}
          </List> 
      </div>
    )
  }
});

var InventoryModule = React.createClass({
  getInitialState: function () {
    return {
      inventories: [],
      loading: true,
      progress: 0
    }
  },

  componentDidMount: function () {
    $.get(getTop25InventoryUrl, function (result) {
      if (!this.isMounted()) return;
      this.setState({
        inventories: result,
        loading: false,
        progress: 100
      })
    }.bind(this));
  },

  render: function () {
    var loadingStyle = this.state.loading ? '' : 'display: none';
    return <div>
        { this.state.loading ?
          <ProgressBar mode='indeterminate' />
          : null
        }
      <InventoryList data={this.state.inventories} />
    </div>
  }
}) 

export default InventoryModule;

