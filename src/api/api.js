import axios from 'axios'

export const passApi = axios.create({
  baseURL: 'https://invites-mock.netlify.app/.netlify/functions/invite',
  headers: {
    'Content-Type': 'application/json',
  },
})
