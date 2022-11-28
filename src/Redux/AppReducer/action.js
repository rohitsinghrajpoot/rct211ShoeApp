//Write the ActionCreator functions here
import * as types from './actionType';
import axios from 'axios';
const getshoesrequest = () => {
  return {
    type: types.GET_SHOES_DATA_REQUEST,
  };
};

const getshoessuccess = (payload) => {
  return {
    type: types.GET_SHOES_DATA_SUCCESS,
    payload,
  };
};

const getshoesfailure = () => {
  return {
    type: types.GET_SHOES_DATA_FAILURE,
  };
};

const shoesData = (params) => (dispatch) => {
  dispatch(getshoesrequest());
  return axios
    .get('http://localhost:8080/shoes', params)
    .then((res) => {
      dispatch(getshoessuccess(res.data));
    })
    .catch((err) => dispatch(getshoesfailure()));
};
export { getshoesfailure, getshoesrequest, getshoessuccess, shoesData };
