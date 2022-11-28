import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function signIn(user) {
  const promise = axios.post(`${BASE_URL}/sign-in`, user);

  return promise;
}

function signUp(user) {
  const promise = axios.post(`${BASE_URL}/sign-up`, user);

  return promise;
}

function getUser(token) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.get(`${BASE_URL}/user`, {headers})

    return promise;
}

function getItems(token) {
    const headers = {
        authorization: `Bearer ${token}`
    };
    const promise = axios.get(`${BASE_URL}/cart`, {headers})

    return promise;
}

export { signIn, signUp, getUser, getItems };
