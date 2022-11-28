import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function signIn(user) {
  const promise = axios.post(`${BASE_URL}/sign-in`, user);

  return promise;
}

function signUp(user) {
  const promise = axios.post(`${BASE_URL}/sign-up`, user);

  return promise;
}

function productsGet() {
  const promise = axios.get(`${BASE_URL}/products`);

  return promise;
}

export { signIn, signUp, productsGet };
