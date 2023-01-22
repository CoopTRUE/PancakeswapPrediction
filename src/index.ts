import * as dotenv from 'dotenv'
dotenv.config()
import { ethers } from 'ethers'
import ABI from './ABI.json'

const CONTRACT_ADDRESS = '0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA'

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet)

console.log(contract)
