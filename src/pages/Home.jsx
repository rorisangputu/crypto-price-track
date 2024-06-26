import { useContext, useEffect, useState } from "react"
import Hero from "../components/Hero"
import { CoinContext } from "../context/CoinContext"
import { Link } from "react-router-dom"




const Home = () => {
    const { allCoin, currency, setCurrency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    const currencyHandler = (e) => {
        const value = e.target.value;
        const symbol = getSymbol(value);
        setCurrency({ name: value, symbol });
    };

    const getSymbol = (currencyName) => {
        switch (currencyName) {
            case "usd":
                return "$";
            case "eur":
                return "€";
            case "zar":
                return "R";
            default:
                return "$";
        }
    };

    const [input, setInput] = useState('');


    const inputHandler = (e) => {
        setInput(e.target.value)
        if (e.target.value === "") {
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = (e) => {
        e.preventDefault();
        const query = input.toLowerCase();
        setDisplayCoin(allCoin.filter(coin => coin.name.toLowerCase().includes(query)));
    };



    return (
        <div className=" my-5">
            <Hero setDisplayCoin={setDisplayCoin} allCoin={allCoin} />
            <h1 id="market-updates" className="text-white text-5xl md:text-7xl mt-5 container mx-auto text-center font-bold">Market Updates</h1>
            <form onSubmit={searchHandler} className="my-5 bg-white w-[280px] md:w-[425px] h-11 md:h-12 flex justify-center items-center rounded-lg mx-auto">
                <input
                    onChange={inputHandler} required value={input}
                    className="w-55 md:w-80 bg-transparent h-8 text-black md:h-10 rounded-lg"
                    type="text"
                    placeholder="Search crypto.."
                    list="coinlist"
                />

                <datalist id="coinlist">
                    {allCoin.map((item, index) => (
                        <option key={index} value={item.name} />
                    ))}
                </datalist>

                <button className="ml-2 text-white bg-purple-900 w-16 
                        md:w-20 rounded-lg h-8 md:h-10" type="submit"
                >
                    Search
                </button>
            </form>
            <div className="max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] flex mx-auto justify-between text-white text-medium mb-2">
                <p className="ml-1">Currency: {currency.symbol}</p>
                <select onChange={currencyHandler} className='bg-transparent w-[70px] rounded-md font-medium 
                '>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="zar">ZAR</option>
                </select>
            </div>
            <div className="w-full md:max-w-[700px] lg:max-w-[900px] mx-auto  shadow-xl rounded-lg mb-10">
                <div className="grid grid-cols-[0.2fr,2fr,1fr,1.4fr,1.5fr] p-4 rounded-t-xl  items-center text-white bg-gradient-to-r from-[#2600fc] to-[#ff00ea] ">
                    <p>#</p>
                    <p className="font-semibold">Coins</p>
                    <p className="font-semibold">Price</p>
                    <p className="font-semibold">24h %</p>
                    <p className="font-semibold">Market Cap</p>
                </div>
                {displayCoin.slice(0, 10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} key={index} className="border-b grid grid-cols-[0.2fr,2fr,1fr,1.4fr,1.5fr] p-4 flex items-center text-white  text-sm md:text-lg">
                        <p>{item.market_cap_rank}</p>
                        <div className="flex items-center gap-1 sm:gap-3 md:gap-5">
                            <img className="h-4 sm:h-6 lg:h-8 ml-1 sm:ml-2 md:ml-3" src={item.image} alt="" />
                            <p className="ml-2">{item.name}</p>
                        </div>
                        <p>{item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                        <p>{item.market_cap ? Number(item.market_cap).toLocaleString() : 'N/A'}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home