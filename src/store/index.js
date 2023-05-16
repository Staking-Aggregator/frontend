import { proxy } from 'valtio';

const state = proxy({
    provider:{},
    signer:{},
    walletAddress:'',
    isStakingScreen:false,
})

export default state;