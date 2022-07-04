import React, { useEffect, useState } from 'react'
import { WSButtonsComponent } from '../components/ws-buttons'
import { IHTTPButton, HTTPButtonsComponent } from '../components/http-buttons'
import { IBlock, IChain } from '../types/common'
import { BlockComponent } from '../components/block'

export const TestScreen = () => {
  const [chain, setChain] = useState<IChain>([])
  const [transactions, setTransactions] = useState([])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 1000,
          maxHeight: 500,
          overflow: 'scroll',
        }}
      >
        {chain.map((b: IBlock) => {
          return <BlockComponent {...b} />
        })}
      </div>
      <div
        style={{
          display: 'flex',
          width: 200,
          height: 500,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <WSButtonsComponent callback={() => {}} />
        <HTTPButtonsComponent
          callback={({ chain }) => {
            console.warn(chain)
            setChain(chain)
          }}
        />
      </div>
    </div>
  )
}
