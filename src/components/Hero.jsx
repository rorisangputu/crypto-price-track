import { useState } from "react"




const Hero = ({ setDisplayCoin, allCoin }) => {


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
        <div className="text-white">
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center
                flex flex-col justify-center'
            >
                <h1 className="md:text-7xl sm:text-6xl text-5xl 
                    font-bold font-sans md:py-6"
                >
                    Largest <br /> Crypto Marketplace
                </h1>
                <p className="text-2xl sm:text-3xl md:text-3xl  
                         font-medium sm:font-semibold md:font-bold py-5 md:py-4">
                    Welcome to the World&apos;s Leading <i>Cryptocurrency</i> Marketplace.
                </p>
                <form onSubmit={searchHandler} className="mt-5 bg-white w-[265px] md:w-[425px] h-11 md:h-12 flex justify-center items-center rounded-lg mx-auto">
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


            </div>
        </div>
    )
}

export default Hero