import axios from 'axios';

function setHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'application/json',
      'api-version': 'v1',
    },
  };
  return _headers;
}

export function get(url, params, cb) {
  axios.get(`${process.env.BASE_API_URL}${url}`, params, setHeader()).then((response, err) => {
    // return response['data'];
    cb(response['data'], err);
  }).catch((err) => {
    cb({}, err);
  });
}

export function post(url, params, cb) {
  axios.post(`${process.env.BASE_API_URL}${url}`, params, setHeader()).then((response, err) => {
    cb(response['data'], err);
  }).catch((err) => {
    cb(err);
  });
}
