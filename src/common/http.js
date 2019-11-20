import Axios from 'axios';
import Qs from 'qs';

const instantce = Axios.create( {
  baseURL: '',
  headers: {},
} );
const http = (...arg) => instantce(...arg);

http.post = function ( url, params = {}, config = {} ) {
  return instantce.post( url, params, config );
};

http.get = function ( url, params = {}, config = {} ) {
  return instantce.get( url, {
    params,
    ...config,
  })
};

instantce.interceptors.request.use( ( fulfilled = {}) => {
  if ( fulfilled.method.toLocaleLowerCase() === 'post' ) {
    fulfilled.params = Qs.stringify( fulfilled.params );
  }
  return fulfilled;
} );

export default http;