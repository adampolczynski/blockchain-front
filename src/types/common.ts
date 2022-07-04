export interface IAccount {}

export interface IBlock {
  timestamp: string
  lastHash: string
  hash: string
  data: object
  validator?: string
  signature?: string
  accounts?: IAccount[]
}

export type IChain = IBlock[]

export interface ITransaction {
  to: string
  amount: number
  type: 'x' | 'y'
  blockchain?: IChain
}
