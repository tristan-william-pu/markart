/*
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:58:42
 * @Description: 工具函数
 */
function createXhr() {
	if (window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if (window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
const local = ( lg ) => {
  const key = 'market_local';
  if ( lg ) localStorage.setItem( key, lg );
  else lg = localStorage.getItem( key ) || /zh/i.test( window.navigator.language ) ? 'cn' : 'en';
  return lg;
}

const getClientHeight = () => {
  var clientHeight = 0;
  if ( document.body.clientHeight && document.documentElement.clientHeight ) {
    var clientHeight = ( document.body.clientHeight < document.documentElement.clientHeight ) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  else {
    var clientHeight = ( document.body.clientHeight > document.documentElement.clientHeight ) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
}

const downloadPdf = (path = '', name = '') => {
  if (!path) return;
  name = name || path.replace(/.*\//, '');
  let xhr = createXhr();
  xhr.open('GET', path, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 || xhr.status <= 304) {
        let aLink = document.createElement('a');
        aLink.href = xhr.response;
        aLink.download = name;
        aLink.click();
        xhr = null;
        aLink = null;
      } else {
        console.error(xhr);
        throw new Error('XHR On Error')
      }
    }
  }
  xhr.setRequestHeader('Content-Type', `application/pdf`);
  xhr.responseType = "blob";
  xhr.send();
}

export default {
  local,
  getClientHeight,
  downloadPdf
}