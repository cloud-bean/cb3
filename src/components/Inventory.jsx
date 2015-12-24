import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import $ from 'jquery';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/List';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import { requestPosts, receivePosts, fetchPosts } from '../actions/inventoryAction';
import store from '../reduxStore';

const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/10';

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
              <InventoryNode {...inventory} key={index}>
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

    componentDidMount() {
        store.dispatch(fetchPosts(getTop25InventoryUrl))
            .then(()=> {
                console.log(store.getState());
            });
    };

  render(){
    const {dispatch, data, isFetching} = this.props;
      console.log(dispatch, data, isFetching);
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


function mapStateIntoModuleProps(state) {
    // state is the global store
    var inventoryStore = state.inventoryStore;
  return {
    data: inventoryStore.items,
    isFetching: inventoryStore.isFetching
  };
}

export default connect(mapStateIntoModuleProps)(InventoryModule);
