import axios from "axios";

export async function topUpWalletBalance() {
    const url = 'http://localhost:1984/mint/s6sgF_F8INO05M3BdJtH15OtQxGc880z7Jh3jgqMhno/100000000';

    try {
        const response = await axios.get(url);
        console.log('Data received:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}