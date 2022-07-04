import axios, { AxiosResponse } from 'axios'

const URL = process.env.API_URL

const getBlocks = () => {
  axios.get(`${URL}/blocks`).then(({ data }: AxiosResponse) => {
    return data
  })
}
const mine = (data: string) => {
  axios
    .post(`${URL}/mine`, {
      data,
    })
    .then(({ data }: AxiosResponse) => {
      return data
    })
}

export const ChainService = {
  getBlocks,
  mine,
}
