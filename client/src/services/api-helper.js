import axios from 'axios';

const testUrl = 'http://localhost:3000'
const prodUrl = 'https://gift-horse.herokuapp.com/'

const api = axios.create({
  baseURL: prodUrl
})

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (e) {
    return 500;
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (e) {
    return 500;
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const createGift = async (data, age) => {
  age = parseInt(age);
  const resp = await api.post(`/ages/${age}/gifts`, { gift: data })
  return resp.data
}

export const readAllGifts = async () => {
  const resp = await api.get('/gifts')
  return resp.data
}

export const readUserGifts = async () => {
  const resp = await api.get('/gifts')
  return resp.data
}

export const readGiftsbyAge = async (id) => {
  const resp = await api.get(`/ages/${id}/gifts`)
  return resp.data
}

export const readSingleGift = async (id) => {
  const resp = await api.get(`/gifts/${id}`)
  return resp.data
}

export const updateGift = async (id, data) => {
  const resp = await api.put(`/gifts/${id}`, data)
  return resp.data
}

export const destroyGift = async (id) => {
  const resp = await api.delete(`/gifts/${id}`)
  return resp.data
}
