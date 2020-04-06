import axios from 'axios';

const URL =
  location.hostname === 'localhost'
    ? 'http://127.0.0.1:3333/graphql'
    : 'https://pigeon-back.herokuapp.com/graphql';
const token = localStorage.getItem('auth');
const regex = /\n[\s]+/g;

export const graphql = async (query, variables) => {
  try {
    const { data } = await axios.post(URL, {
      query: query.replace(regex, ' '),
      variables,
      headers: {
        Authorization: token && `Bearer ${token}`
      }
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
