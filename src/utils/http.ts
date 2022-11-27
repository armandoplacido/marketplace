import axios from "axios"

const http = axios.create({
  baseURL: process.env.BASE_URL,
})

export default http
