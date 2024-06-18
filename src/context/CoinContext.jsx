import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext(); // Change coinContext to CoinContext

const CoinContextProvider = (props) => { // Change CoinContext to CoinContextProvider

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-Gfj833UfRKisA5jvaTtaq8Tv' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin, currency, setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}> {/* Change coinContext to CoinContext */}
            {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider; // Change CoinContext to CoinContextProvider
