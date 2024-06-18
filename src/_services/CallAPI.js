import axios from 'axios';
import { get, post } from '../_helper/ApiBase';

function setHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'application/json',
      'api-version': 'v1',
    },
  };
  return _headers;
}

export const callPostAPI = async (url, params) => {
  let res;
  await axios.post(`${process.env.BASE_API_URL}${url}`, params, setHeader()).then((result) => {
    const response = result.data;
    if (response._status) {
      res = {
        status: true,
        data: response['_data'],
        message: response['_message'],
      };
    } else {
      res = {
        status: false,
        data: {},
        message: response['_message'],
      };
    }
  }).catch((err) => {
    res = {
      status: false,
      data: {},
      message: err,
    };
  });
  return res;
}

export const callAPI = (method, url, params, cb) => {
  if (method == 'GET') {
    get(url, {
      params: params, paramsSerializer: (params) => {
        // Sample implementation of query string building
        let result = '';
        Object.keys(params).forEach((key) => {
          result += `${key}=${encodeURIComponent(params[key])}&`;
        });
        return result.substr(0, result.length - 1);
      },
    }, (response) => {
      try {
        let res;
        if (response._status) {
          res = {
            status: true,
            data: response['_data'],
            message: response['_message'],
          };
        } else {
          res = {
            status: false,
            data: {},
            message: response['_message'],
          };
        }
        cb(res);
      } catch (err) {
        throw err;
        // cb(err)
      }
    });
  } else {
    post(url, params, (response) => {
      try {
        let res;
        if (response._status) {
          res = {
            status: true,
            data: response['_data'],
            message: response['_message'],
          };
        } else {
          res = {
            status: false,
            data: {},
            message: response['_message'],
          };
        }
        cb(res);
      } catch (err) {
        throw err;
        // cb(err)
      }
    });
  }
};