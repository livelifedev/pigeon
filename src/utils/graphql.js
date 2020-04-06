import axios from 'axios';

const URL =
  location.hostname === 'localhost'
    ? 'http://127.0.0.1:3333/graphql'
    : 'https://pigeon-back.herokuapp.com/graphql';
const token = localStorage.getItem('token');
const regex = /\n[\s]+/g;

export const graphql = async (query, variables) => {
  const { data } = await axios.post(URL, {
    query: query.replace(regex, ' '),
    variables,
    headers: {
      Authorization: token && `Bearer ${token}`
    }
  });
  const { errors } = data;

  if (errors && errors.length) {
    return Promise.reject(errors);
  }
  return data;
};
