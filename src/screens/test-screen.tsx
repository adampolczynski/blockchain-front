import React, { useEffect, useState } from 'react'
import { WSButtons } from '../components/ws-buttons'
import { HTTPButtons } from '../components/http-buttons'

export const TestScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: 800,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 600,
          height: 200,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <WSButtons
          handleClick={(func: any) => console.log('Passed func: ', func)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: 600,
          height: 200,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <HTTPButtons handleClick={() => console.log('')} />
      </div>
    </div>
  )
}
