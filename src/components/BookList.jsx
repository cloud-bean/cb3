import React from 'react';
import WeUI from 'react-weui';
import BookItem from './BookItem';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

export default class UserProfile extends React.Component {
	render(){
		return (
        <section>
          <CellsTitle>书籍列表</CellsTitle>
               <Cells>
                  <BookItem></BookItem>
                  <BookItem></BookItem>
                  <BookItem></BookItem>
                </Cells>
        </section>
		)
	}
}
