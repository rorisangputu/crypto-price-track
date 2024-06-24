import { useEffect, useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";

const Hero = () => {
    const [data, setData] = useState([]);
    const [coinsLoad, setCoinsLoad] = useState(true);
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error!");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <div className="text-white font-space-grotesk z-0">
            <div className="container mx-auto flex flex-col justify-center h-screen px-4 md:px-0 mt-[-96px]">
                <div className="flex flex-col md:flex-row items-center justify-center relative">
                    <h1 className=" z-0 text-6xl sm:text-5xl md:text-7xl lg:text-9xl font-bold md:py-6 text-center font-space-grotesk">
                        TRACK AND TRADE <span className="z-0 text-transparent bg-gradient-to-br from-[#2600fc] to-[#ff00ea] bg-clip-text">CRYPTO CURRENCIES</span>
                    </h1>
                </div>
                <a href="#market" className="text-xl font-semibold w-[25vh] h-[55px] text-center flex 
                items-center justify-center p-2 my-5 bg-gradient-to-r from-[#2600fc] to-[#ff00ea] 
                text-[#f3f2f4] rounded-[10rem] transition-all duration-200 mx-auto md:hidden">
                    See Prices <IconChevronDown />
                </a>
                <div className="hidden md:block w-full lg:w-[900px] mx-auto">
                    <div onLoad={() => setCoinsLoad(false)} className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto">
                        {coinsLoad && <span className="loader mx-auto"></span>}
                        {data.map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="h-[100px] w-[100px]" />
                                <p className="font-medium text-xl">
                                    {item.name}{" "}
                                    <span className={item.price_change_percentage_24h <= 0 ? "text-red-500" : "text-green-500"}>
                                        {item.price_change_percentage_24h?.toFixed(2) + "%"}
                                    </span>
                                </p>
                                <p className="slider-coin__price">
                                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
