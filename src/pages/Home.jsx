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
        <div className="w-[90%] mx-auto my-5">
            <Hero setDisplayCoin={setDisplayCoin} allCoin={allCoin} />
            <h1 id="market-updates"
                className="text-white text-4xl md:text-7xl mt-5 
                  text-center font-bold"
            >
                Market Updates
            </h1>
            <form
                onSubmit={searchHandler}
                className="my-5 bg-white md:w-[425px] h-11 md:h-12 flex px-2 
                justify-between items-center rounded-lg">
                <input
                    onChange={inputHandler} required value={input}
                    className="w-60 md:w-80 bg-transparent h-8 text-black md:h-10 outline-none rounded-lg"
                    type="text"
                    placeholder="Search crypto.."
                    list="coinlist"
                />

                <datalist id="coinlist">
                    {allCoin.map((item, index) => (
                        <option className="bg-white" key={index} value={item.name} />
                    ))}
                </datalist>

                <button className="px-4 flex justify-center items-center text-white bg-purple-900 w-16 
                        md:w-20 rounded-lg h-8 md:h-10" type="submit"
                >
                    Search
                </button>
            </form>
            {/* sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] */}
            <div className="flex justify-between text-white text-medium mb-2">
                <p className="ml-1">Currency: {currency.symbol}</p>
                <select onChange={currencyHandler} className='bg-transparent w-[70px] rounded-md font-medium 
                '>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="zar">ZAR</option>
                </select>
            </div>
            {/* md:max-w-[700px] lg:max-w-[900px] mx-auto */}
            <div className="shadow-xl rounded-lg mb-10">
                <div className="grid grid-cols-[0.2fr,2fr,1fr,1fr,1.5fr] p-4 rounded-t-xl  items-center text-white bg-gradient-to-r from-[#2600fc] to-[#ff00ea] ">
                    <p>#</p>
                    <p className="font-semibold">Coins</p>
                    <p className="font-semibold">Price</p>
                    <p className="font-semibold">24h %</p>
                    <p className="font-semibold">Market Cap</p>
                </div>
                {displayCoin.slice(0, 10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} key={index} className="border-b grid grid-cols-[0.2fr,2fr,1fr,1fr,1.5fr] p-4 flex items-center text-white  text-sm md:text-lg">
                        <p>{item.market_cap_rank}</p>
                        <div style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100px'
                        }}
                            className="flex items-center gap-1 sm:gap-3 md:gap-5">
                            <img className="h-4 sm:h-6 lg:h-8 ml-1 sm:ml-2 md:ml-3" src={item.image} alt="" />
                            <p className="ml-2">{item.name}</p>
                        </div>
                        <p>{item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                        <p style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            {item.market_cap ? Number(item.market_cap).toLocaleString() : 'N/A'}
                        </p>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home