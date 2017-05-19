import React from 'react';
import ReactDOM from 'react-dom';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import PageAlpha from './PageAlpha';
import PagePlots from './PagePlots';
import PageRedux from './PageRedux';
import PageHareAndHounds from './PageHareAndHounds';
import './index.css';

var page = 'default';
var queryString = window.location.search.substring(1);
var queries = queryString.split("&");
var params = {};
for ( var i = 0, l = queries.length; i < l; i++ ) {
  var temp = queries[i].split('=');
  if(temp[0] === 'page'){
    page = temp[1];
  }
  params[temp[0]] = temp[1];
}

var item = null;
switch(page.toLowerCase()){
  case 'about':
    item = <PageAbout qStrings={params}/>;
  break;
  case 'hareandhounds':
    item = <PageHareAndHounds qStrings={params}/>;
  break;
  case 'alpha':
    item = <PageAlpha qStrings={params}/>;
  break;case 'redux':
    item = <PageRedux qStrings={params}/>;
  break;
  case 'plots':
    item = <PagePlots qStrings={params}/>;
  break;
  case 'default':
  default:
    item = <PageHome qStrings={params}/>;
  break;
}

ReactDOM.render( item, document.getElementById('root') );
