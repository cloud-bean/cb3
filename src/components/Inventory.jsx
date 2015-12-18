import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import $ from 'jquery';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/List';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { requestPosts, receivePosts } from '../actions/inventoryAction';

class InventoryNode extends Component {
  render(){
    const {img, name, inv_code} = this.props;
    return (
      <div>
      <ListItem
        avatar ={img}
        caption={name}
        legend ={inv_code}
      />
      </div>
    );
  }
}


class InventoryList extends Component {
  render(){
    return (
      <div>
        <List selectable ripple>
          <ListSubHeader caption='Inventories' />
          {this.props.data.map((inventory,index)=>{
            return(
              <InventoryNode {...inventory}>
              </InventoryNode>
            )
          })
        }
        </List>
      </div>
    );
  }
}


class InventoryModule extends Component {
  constructor() {
   super();
  };

  render(){
    const {dispatch, data, isFetching} = this.props;
    console.log('isFetching:' + isFetching);
    return (
        <div>
          { isFetching ?
              <ProgressBar mode='indeterminate' />
              : null
          }
          <InventoryList data={data} />
        </div>
    );
  }
}


function select(state) {
  return {
    data: state.items,
    isFetching: state.isFetching
  };
}

export default connect(select)(InventoryModule);
