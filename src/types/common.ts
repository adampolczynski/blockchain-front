export interface Account {}

export interface Block {
  timestamp: string
  lastHash: string
  hash: string
  data: object
  validator?: string
  signature?: string
  accounts?: Account[]
}

export type Chain = Block[]

export interface Transaction {
  to: string
  amount: number
  type: 'x' | 'y'
  blockchain?: Chain
}
