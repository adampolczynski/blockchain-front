import { WSService } from '../services/ws-service'
import { IChain, IBlock, ITransaction } from '../types/common'

interface IWSButton {
  func: () => (data: ITransaction & IBlock & IChain) => void
  title: string
}

interface IWSButtonsProps {
  callback: () => void
}

export const WSButtonsComponent = ({ callback }: IWSButtonsProps) => {
  const WS_BUTTONS: IWSButton[] = [
    {
      func: () => WSService.createTransaction,
      title: 'Create transaction',
    },
    {
      func: () => WSService.sendChain,
      title: 'Send chain',
    },
    { func: () => WSService.sendBlock, title: 'Send block' },
  ]

  return (
    <div style={{}}>
      {WS_BUTTONS.map((_: IWSButton) => (
        <button
          key={`${_.title}`}
          onClick={() => {
            _.func()
            callback()
          }}
        >
          {_.title} (WS)
        </button>
      ))}
    </div>
  )
}
