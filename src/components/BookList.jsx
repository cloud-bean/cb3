import React from 'react';
import WeUI from 'react-weui';
import BookItem from './BookItem';
import * as service from '../ajaxService/service'
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;
export default class BookList extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    // 	service.getRentedBookOfMember('5513a00900445c417e01d805').then((value)=>{
    // 		this.setState({
    // 			books:value
    // 		})
    // 	},(err)=>{
    // 		console.log('err');
    // 	});
    // }
    render() {
      let books = [];
      if(this.props.books){
        books = this.props.books.map((book)=> {
                return (<BookItem bookName={book.name}></BookItem>)
        });
      }

        return (
            <section>
                <CellsTitle>书籍列表</CellsTitle>
                <Cells>
                  {books}
                </Cells>
            </section>
        )
    }
}
