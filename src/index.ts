import * as dotenv from 'dotenv'
dotenv.config()
import { ethers } from 'ethers'
import ABI from './ABI.json'

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
const wallet = new ethers.Wallet('0x...', provider)
