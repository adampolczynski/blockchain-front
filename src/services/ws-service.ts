import { Block, Chain, Transaction } from '../types/common'

const ws: any = {} //new WebSocket(process.env.WS_URL || '')

const initialize = () => {
  // ws.onopen = (event) => {
  //   console.log('WebSocket connection opened')
  // }
  // ws.onmessage = function (event) {
  //   const json = JSON.parse(event.data)
  //   try {
  //     console.warn('Received JSON by WS: ', json)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}

const createTransaction = ({ to, amount, type }: Transaction) => {
  ws.send(
    JSON.stringify({
      type: 'TRANSACTION',
      transaction: {
        to,
        amount,
        type,
      },
    })
  )
}

const sendChain = (chain: Chain) => {
  ws.send(
    JSON.stringify({
      type: 'CHAIN',
      chain,
    })
  )
}
const sendBlock = (block: Block) => {
  ws.send(
    JSON.stringify({
      type: 'BLOCK',
      block,
    })
  )
}

export const WSService = {
  initialize,
  createTransaction,
  sendChain,
  sendBlock,
}
