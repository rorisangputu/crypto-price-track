import { useContext, useEffect, useState } from "react"
import Hero from "../components/Hero"
import { CoinContext } from "../context/CoinContext"



const Home = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <div>
            <Hero />
            <div className="max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto bg-white shadow-xl bg-opacity-10 rounded-lg mb-10">
                <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1.5fr] p-4 flex items-center text-white">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p>24hr</p>
                    <p>Market Cap</p>
                </div>
            </div>
        </div>
    )
}

export default Home