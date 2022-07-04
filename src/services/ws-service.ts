import { IBlock, IChain, ITransaction } from '../types/common'

let ws: WebSocket | undefined = undefined

const initialize = () => {
  ws = new WebSocket(process.env.REACT_APP_WS_URL || '')
  ws.onopen = (event) => {
    console.log('WebSocket connection opened')
  }
  ws.onmessage = function (event) {
    const json = JSON.parse(event.data)
    try {
      console.warn('Received JSON by WS: ', json)
    } catch (err) {
      console.log(err)
    }
  }
}

const createTransaction = ({ to, amount, type }: ITransaction) => {
  if (!ws) throw new Error('no websocket connection')
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

const sendChain = (chain: IChain) => {
  if (!ws) throw new Error('no websocket connection')
  ws.send(
    JSON.stringify({
      type: 'CHAIN',
      chain,
    })
  )
}
const sendBlock = (block: IBlock) => {
  if (!ws) throw new Error('no websocket connection')
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
