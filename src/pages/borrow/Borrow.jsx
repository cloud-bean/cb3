import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import AddBookBar from './../../components/AddBookBar';
import {addWantedBook,selectBook,resetStatus} from '../../actions/inventoryAction';
import {showAlert,showLoading} from '../../actions/promptAction';
import WeUI from 'react-weui';
import {connect} from 'react-redux';

const {Button,ButtonArea,Toast,Dialog} = WeUI;
const {Alert} = Dialog;

export  class Borrow extends React.Component {
  constructor(props){
    super(props);
    this.state={
        alert: {
            buttons: [
                {
                    label: '好的',
                    onClick: this.hideAlert.bind(this)
                }
            ]
        }
    };

  }


    hideAlert(){
        this.props.dispatch(showAlert(false));
    }

    handleClick(e){
      //this.props.dispatch();
    }
    render() {
        const {loading,wantedBooks,dispatch,userStore,status,prompt} = this.props;
        return (
            <div>
              <Alert
                    show={prompt.alert.show}
                    title={prompt.alert.title}
                    buttons={this.state.alert.buttons}>
                        {prompt.alert.content}
              </Alert>
              <Toast icon="loading" show={prompt.loading}>
                  正在加载中...
              </Toast>
              <UserProfile userStore={userStore}></UserProfile>
              <AddBookBar onAddClick={invCode=>dispatch(addWantedBook(invCode))}></AddBookBar>
              <BookList listName='预借阅列表' books={wantedBooks} onSelect={index=>dispatch(selectBook(index,'borrow'))}> </BookList>
                <ButtonArea>
                    <Button>确认借阅</Button>
                </ButtonArea>
            </div>
        )
    }
}
function mapStateIntoModuleProps(state) {
    const inventoryStore = state.inventoryStore;
    return {
        userStore:state.userStore,
        loading: inventoryStore.loading,
        wantedBooks:inventoryStore.wantedBooks,
        status:inventoryStore.status,
        prompt:state.prompt,
    };
}
export default connect(mapStateIntoModuleProps)(Borrow);
