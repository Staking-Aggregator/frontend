import { proxy } from 'valtio';

const state = proxy({
    provider:{},
    signer:{},
    walletAddress:''
})

export default state;