import { AxiosError } from 'axios'
import { ChainService } from '../services/chain-service'
import { WalletService } from '../services/wallet-service'
import { IChain, ITransaction } from '../types/common'

export interface IHTTPButton {
  func: any //() => Chain & Transaction & string & undefined
  title: string
}

interface IHTTPButtonsProps {
  callback: (otps: { chain: IChain }) => void
}

export const HTTPButtonsComponent = ({ callback }: IHTTPButtonsProps) => {
  const BUTTONS: IHTTPButton[] = [
    {
      func: async () => {
        const chain = await ChainService.getBlocks()
        return chain
      },
      title: 'Get blocks',
    },
    {
      func: async () => {
        const chain = await ChainService.mine('test')
        return chain
      },
      title: 'Mine',
    },
    {
      func: async () => {
        return await WalletService.walletTransactions
      },
      title: 'Wallet transactions',
    },
    {
      func: async () => {
        return await WalletService.walletTransact
      },
      title: 'Wallet transact',
    },
  ]

  return (
    <div style={{}}>
      {BUTTONS.map((_: IHTTPButton) => (
        <button
          key={`${_.title}`}
          onClick={async () => {
            const chain = await _.func()
            callback({
              chain,
            })
          }}
        >
          {_.title} (WS)
        </button>
      ))}
    </div>
  )
}
