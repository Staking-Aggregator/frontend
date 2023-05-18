import axios from 'axios';

const providersAPRAPI = [
    {
        provider:'RocketPool',
        API:'https://api.rocketpool.net/api/apr'
    },
    {
        provider: 'Lido',
        API: 'https://eth-api.lido.fi/v1/protocol/steth/apr/sma'
    }
];

export async function LidoAPR() {
    try {
        const response = await axios.get('https://eth-api.lido.fi/v1/protocol/steth/apr/sma');
        return response.data.data.smaApr;  
    } catch (error) {
        console.error("Error while getting LidoAPR: ",error);
    }
}
export async function RocketPoolAPR() {
    try {
        const response = await axios.get('https://api.rocketpool.net/api/apr',{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
            }
        });
        console.log("response :",response.data);  
        return response;  
    } catch (error) {
        console.error("Error while getting RocketPool: ",error);
    }
}