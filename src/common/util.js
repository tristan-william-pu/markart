/*
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-10 10:17:15
 * @Description: 工具函数
 */
function createXhr() {
	if (window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if (window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
const type = target => Object.prototype.toString.call(target).replace( /.*\s+|[^\w]/g, '' ).toLocaleLowerCase();
const local = ( lg ) => {
  const key = 'market_local';
  if ( lg ) localStorage.setItem( key, lg );
  else lg = localStorage.getItem( key ) || (/zh/i.test( window.navigator.language ) ? 'cn' : 'en');
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
        aLink.href = window.URL.createObjectURL(xhr.response);
        aLink.download = name;
        aLink.click();
        aLink = null;
        xhr = null;
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

function autoImgSize(_imgwidth, _imgheight, _rewidth, reheight){
	let maxWidth = _rewidth
	let maxHeight = reheight
	let hRatio
	let wRatio
	let Ratio = 1
	let w = _imgwidth
	let h = _imgheight
	wRatio = maxWidth / w
	hRatio = maxHeight / h
	Ratio = (wRatio <= hRatio ? wRatio : hRatio)
  return {
    width: Math.floor( w * Ratio ),
    height: Math.floor( h * Ratio )
  };
}
function readImage ( file = '') {
  return new Promise( (resole, reject) => {
    if ( !file || type(file) !== 'file') {
      reject(null)
    } else {
      let reader = new FileReader();
      reader.onload = () => {
        let img = new Image();
        img.onload = () => {
          const result = {
            width: img.width,
            height: img.height,
            base64: img.src,
          };
          img = null;
          reader = null;
          resole( result );
        }
        img.onerror = () => {
          reject( null );
        }
        img.src = reader.result;
      }
      reader.onerror = () => {
        reject( null );
      }
      reader.readAsDataURL( file );
    }
  } );
}
let timmer = null
function success(msg, isErr = false) {
  clearTimeout( timmer );
  const notice = document.querySelector( '#notice' );
  const cname = notice.className.replace( /(\s+fade-in)|(\s+fade-out)/g, '' );
  notice.className = cname;
  notice.querySelector('.success').style.display = isErr ? 'none' : 'block';
  notice.querySelector('.error').style.display = isErr ? 'block' : 'none';
  setTimeout(() => {
    notice.querySelector('.detail').innerText = msg;
    notice.className = cname + ' fade-in';
    timmer = setTimeout(() => {
      notice.className = cname + ' fade-out';
    }, 2500);
  })
}
function error(msg) {
  success(msg, true)
}
export default {
  local,
  getClientHeight,
  downloadPdf,
  autoImgSize,
  readImage,
  type,
  success,
  error,
}