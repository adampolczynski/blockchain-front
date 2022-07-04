import axios, { AxiosResponse } from 'axios'
import { Transaction } from '../types/common'

const URL = process.env.API_URL

const walletTransactions = () => {
  axios.get(`${URL}/wallet/transactions`).then(({ data }: AxiosResponse) => {
    return data
  })
}
const walletTransact = (transaction: Transaction) => {
  axios
    .post(`${URL}/wallet/transact`, {
      data: transaction,
    })
    .then(({ data }: AxiosResponse) => {
      return data
    })
}

export const WalletService = {
  walletTransactions,
  walletTransact,
}
