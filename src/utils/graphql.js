import axios from 'axios';

const URL =
  location.hostname === 'localhost'
    ? 'http://127.0.0.1:3333/graphql'
    : 'https://pigeon-back.herokuapp.com/graphql';
const REGEX = /\n[\s]+/g;

export const graphql = async (query, variables) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(
    URL,
    {
      query: query.replace(REGEX, ' '),
      variables
    },
    {
      headers: {
        Authorization: token && `Bearer ${token}`
      }
    }
  );
  const { errors } = data;

  if (errors && errors.length) {
    return Promise.reject(errors);
  }
  return data;
};
