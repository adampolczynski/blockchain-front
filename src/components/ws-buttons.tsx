import { WSService } from '../services/ws-service'
import { Chain, Block, Transaction } from '../types/common'

interface BUTTON {
  func: any // (data: Transaction & Block & Chain) => void
  title: string
}

interface WSButtonsProps {
  handleClick: (func: BUTTON['func']) => void
}

export const WSButtons = ({ handleClick }: WSButtonsProps) => {
  const WS_BUTTONS: BUTTON[] = [
    {
      func: WSService.createTransaction,
      title: 'Create transaction',
    },
    {
      func: WSService.sendChain,
      title: 'Send chain',
    },
    { func: WSService.sendBlock, title: 'Send block' },
  ]

  return (
    <div style={{}}>
      {WS_BUTTONS.map((_: BUTTON) => (
        <button key={`${_.title}`} onClick={() => handleClick(_.func)}>
          {_.title} (WS)
        </button>
      ))}
    </div>
  )
}
