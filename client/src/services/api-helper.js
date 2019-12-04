import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
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

export const readSingleGift  = async (id) => {
  const resp = await api.get(`/gifts/${id}`)
  return resp.data
}

export const updateGift = async (id, data) => {
  const resp = await api.put(`/gifts/${id}`, { gift: data })
  return resp.data
}

export const destroyGift = async (id) => {
  const resp = await api.delete(`/gifts/${id}`)
  return resp.data
}
