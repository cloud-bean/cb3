import React from 'react';
import UserProfile from './../../components/userProfile/UserProfile';
import BookList from './../../components/BookList';
import AddBookBar from './../../components/AddBookBar';
import {setUserRentCount} from '../../actions/userAction';
import {addWantedBook,selectBook,borrowBook} from '../../actions/inventoryAction';
import {showAlert,showLoading} from '../../actions/promptAction';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
import $ from 'jquery';
import PageHeader from '../../components/pageHeader/pageHeader';
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
      let checkedWantBook = [];
      $.each(this.props.wantedBooks,(index,elem)=>{
        if(elem.isSelected==true){
          checkedWantBook.push(elem.book);
        }
      })
      let checkedCount = checkedWantBook.length;
      if(checkedCount>(4-this.props.userStore.rentCount)){
        this.props.dispatch(showAlert(true,'警告','超出借书数量，请先还书'))
      }else{
        //确认借书操作
        this.props.dispatch(showLoading(true));
        $.each(checkedWantBook,(index,elem)=>{
            this.props.dispatch(borrowBook(this.props.userStore.user._id,elem._id,elem.name)).then(()=>{
              this.props.dispatch(setUserRentCount('add'))
              checkedCount=checkedCount-1;
              if(checkedCount==0){
                this.props.dispatch(showLoading(false));
                this.props.dispatch(showAlert(true,'提示','借书成功'));
              }
            });
        });
      }
      //this.props.dispatch();
    }
    render() {
        const {loading,wantedBooks,dispatch,userStore,status,prompt} = this.props;
        return (
            <div>
                <PageHeader text="借书" />
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
                    <Button onClick={e=>this.handleClick(e)}>确认借阅</Button>
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
