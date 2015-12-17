import React,{Component} from 'react';
import { connect,Provider} from 'react-redux';
import $ from 'jquery';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/List';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {
  requestPosts, receivePosts
} from '../actions/inventoryAction';


const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/10';


export class InventoryList extends Component {
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



class InventoryNode extends Component {
  render(){
    return (
      <div>
      <ListItem
        avatar={this.props.img}
        caption={this.props.name}
        legend={this.props.inv_code}
      />
      </div>
    );
  }
}

class InventoryModule extends Component {


  constructor() {
   super();
  //  this.state = {
  //    inventories: [],
  //    loading: true,
  //    progress: 0
  //  };
  //   $.get(getTop25InventoryUrl, (result)=>{
  //       //  if (!this.isMounted()) return;
  //        this.setState({
  //          inventories: result,
  //          loading: false,
  //          progress: 100
  //        })
  //   });
  };



  render(){
    const {dispatch,data,isFetching} = this.props;
    console.log('isFetching:'+isFetching);
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

// var InventoryModule = React.createClass({
//   getInitialState: function () {
//     return {
//       // inventories: [{"name":"聪明的亨利","inv_code":"104100007012"}],
//       loading: false,
//       progress: 0
//     }
//   },
//
//   // componentDidMount: function () {
//   //   $.get(getTop25InventoryUrl, function (result) {
//   //     if (!this.isMounted()) return;
//   //     this.setState({
//   //       inventories: result,
//   //       loading: false,
//   //       progress: 100
//   //     })
//   //   }.bind(this));
//   // },
//
//   render: function () {
//     var loadingStyle = this.state.loading ? '' : 'display: none';
//     var inventories: [{"name":"聪明的亨利","inv_code":"104100007012"}];
//     return <div>
//         { this.state.loading ?
//           <ProgressBar mode='indeterminate' />
//           : null
//         }
//       <InventoryList data={inventories} />
//     </div>
//   }
// })

function select(state) {
  return {
    data: state.items,
    isFetching:state.isFetching
  };
}

export default connect(select)(InventoryModule);
