import React from 'react';
import WeUI from 'react-weui';
import BookItem from './BookItem';
import * as service from '../ajaxService/service'
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;
export default class BookList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      let books = [];
      if(this.props.books){
        books = this.props.books.map((item,index)=> {
                return (<BookItem hasCheckedButton={this.props.hasCheckedButton} book={item.book} key={index} checked={item.isSelected} onChange={()=>this.props.onSelect(index)}></BookItem>)
        });
      }

        return (

          <section>
          {books.length===0?
          <div></div>
          :
          <div>
          <CellsTitle>{this.props.listName}</CellsTitle>
            <Cells>
              {books}
            </Cells>
          </div>
          }
            </section>

        )
    }
}
