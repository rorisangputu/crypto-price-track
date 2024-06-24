import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CoinContext } from "../context/CoinContext";



const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);
    const { currency } = useContext(CoinContext);
    const apiKey = 'CG-Gfj833UfRKisA5jvaTtaq8Tv';
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
            const data = await response.json();
            setCoinData(data);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchHistoryData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
        };

        try {
            const resp = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await resp.json();
            setHistoricalData(data);
        } catch (err) {
            console.error(err);
        }


    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoryData();
    }, [currency]);

    if (!coinData || !historicalData) {
        return (
            <div className="grid place-self-center min-h-[80vh]">
                <div className="loader">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" strokeWidth="8" />
                    </svg>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center  md:h-screen">
            <div className=" text-white container gap-x-3 lg:w-[1200px] flex flex-col lg:flex-row items-center mx-auto">
                <div className="mx-auto text-center flex flex-col items-center">
                    <img src={coinData.image?.large} alt={coinData.name} className="object-contain" />
                    <h1 className="text-5xl font-semibold my-6">{coinData.name}</h1>
                    <h3 className="text-2xl font-medium">Rank: {coinData.market_cap_rank}</h3>

                </div>
                <hr className="w-[400px] my-5 lg:rotate-90 lg:w-[400px]" />
                <div className="flex flex-col">
                    <div className="text-center px-5 gap-x-5 lg:flex">
                        <p className="lg:text-xl">Symbol: {coinData.symbol}</p>
                        <p className="lg:text-xl">Price: <span className="text-green-500">${coinData.market_data?.current_price[currency.name].toLocaleString()}</span></p>
                    </div>
                    <div className="px-5 py-5">
                        <p className=" lg:text-lg">{coinData.description ? coinData.description.en : ""}</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-white rounded-xl p-2 my-2 bg-gradient-to-r from-[#2600fc] to-[#ff00ea]"><a href="/">Back Home</a></h3>
            </div>
        </div>
    )

}

export default Coin


