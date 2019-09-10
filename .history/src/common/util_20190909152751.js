/*
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 17:01:58
 * @Description: 工具函数
 */
const local = ( lg ) => {
  const key = 'market_local';
  if ( lg ) localStorage.setItem( key, lg );
  else lg = localStorage.getItem( key ) || /zh/i.test( window.navigator.language ) ? 'cn' : 'en';
  return lg;
}

function getClientHeight () {
  var clientHeight = 0;
  if ( document.body.clientHeight && document.documentElement.clientHeight ) {
    var clientHeight = ( document.body.clientHeight < document.documentElement.clientHeight ) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  else {
    var clientHeight = ( document.body.clientHeight > document.documentElement.clientHeight ) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
}

export default {
  local,
  getClientHeight
}