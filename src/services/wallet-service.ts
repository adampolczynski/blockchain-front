import axios, { AxiosResponse } from 'axios'
import { ITransaction } from '../types/common'

const URL = process.env.REACT_APP_API_URL

const walletTransactions = () => {
  axios.get(`${URL}/wallet/transactions`).then(({ data }: AxiosResponse) => {
    return data
  })
}
const walletTransact = (transaction: ITransaction) => {
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
