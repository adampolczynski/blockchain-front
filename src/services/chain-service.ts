import axios, { AxiosResponse } from 'axios'

const URL = process.env.REACT_APP_API_URL

const getBlocks = async () => {
  try {
    const { data: response } = await axios.get(`${URL}/blocks`)
    return response
  } catch (e) {
    console.error(e)
    return null
  }
}
const mine = async (data: string) => {
  try {
    const { data: response } = await axios.post(`${URL}/mine`, {
      data,
    })
    return response
  } catch (e) {
    console.error(e)
    return null
  }
}

export const ChainService = {
  getBlocks,
  mine,
}
