import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();

export async function topUpWalletBalance() {
    const url = `${process.env.APP_URL}/mint/${process.env.WALLET_ADDRESS}/100000000`;
    console.log(url)
    try {
        const response = await axios.get(url);
        console.log('Data received:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}