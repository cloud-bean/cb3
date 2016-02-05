import React from 'react';
import { render } from 'react-dom';
import App from './app'
import './styles/app.scss';
import $ from 'jquery';

var xmlHttpRequest;
$(function ajaxSupport(){
  if(window.XMLHttpRequest){
    xmlHttpRequest=new XMLHttpRequest();
  }else{
    xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
  }
    xmlHttpRequest.open("GET","AjaxServlet",true);
});


render(App, document.getElementById('app'));
