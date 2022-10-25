import axios from 'axios'

export const FetchData = axios.create({
  //configurations
  baseURL: 'http://localhost:3001',
})
