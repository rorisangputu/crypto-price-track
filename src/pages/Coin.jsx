import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CoinContext } from "../context/CoinContext";



const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
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
            const resp = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options);
            const data = await resp.json();
            setHistoricalData(data);
        } catch (err) {
            console.error(err);
        }


    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoryData();
    }, [currency])

    if (!coinData && !historicalData) {
        return <div className="grid place-self-center min-h-[80vh]">
            <div className="animate-rotate mx-auto w-16 -mt-[-166px] h-16 border-4 border-blue-500 border-t-transparent rounded-full">

            </div>
        </div>;
    }
    return (
        <div className="">
            <div className="text-white max-w-[1240px] flex items-center mx-auto">
                <img src={coinData.image?.large} alt={coinData.name} />
                <h1>{coinData.name} - {coinData.symbol.toUpperCase()}</h1>
                <p>{coinData.market_data?.current_price[currency.name]}</p>
            </div>
        </div>
    )

}

export default Coin


