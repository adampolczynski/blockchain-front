import { IBlock } from '../types/common'
import { FaInfoCircle } from 'react-icons/fa'

export const BlockComponent = (block: IBlock) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 240,
        height: 300,
      }}
    >
      {Object.keys(block).map((k: string) => {
        const value = block[k as keyof IBlock]
        return (
          <div
            key={`${block.hash}-${k}`}
            style={{
              display: 'block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <span>
              {typeof value === 'string' ? (
                <span
                  style={{
                    width: 200,
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {value} <FaInfoCircle />
                </span>
              ) : (
                <FaInfoCircle />
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}
