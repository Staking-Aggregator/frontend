import { proxy } from 'valtio';

const state = proxy({
    provider:{},
    signer:{},
    walletAddress:'',
    isStakingScreen:false,
    isLandingPage:true,
})

export default state;