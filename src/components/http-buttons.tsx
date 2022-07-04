import { ChainService } from '../services/chain-service'
import { WalletService } from '../services/wallet-service'
import { Transaction } from '../types/common'

interface BUTTON {
  func: any //(data: Transaction & string & undefined) => void
  title: string
}

interface HTTPButtonsProps {
  handleClick: () => void
}

export const HTTPButtons = ({ handleClick }: HTTPButtonsProps) => {
  const BUTTONS: BUTTON[] = [
    {
      func: ChainService.getBlocks,
      title: 'Get blocks',
    },
    {
      func: ChainService.mine,
      title: 'Mine',
    },
    { func: WalletService.walletTransactions, title: 'Wallet transactions' },
    { func: WalletService.walletTransact, title: 'Wallet transact' },
  ]

  return (
    <div style={{}}>
      {BUTTONS.map((_: BUTTON) => (
        <button key={`${_.title}`} onClick={() => handleClick()}>
          {_.title} (WS)
        </button>
      ))}
    </div>
  )
}
