

const Hero = () => {
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
                <p className="md:text-3xl sm:text-2xl 
                        text-xl font-medium sm:font-semibold md:font-bold py-5 md:py-4">
                    Welcome to the World&apos;s Leading <i>Cryptocurrency</i> Marketplace.
                </p>
                <form className="mt-5 bg-white w-[265px] md:w-[425px] h-11 md:h-12 flex justify-center items-center rounded-lg mx-auto">
                    <input className="w-55 md:w-80 bg-transparent h-7 md:h-10 rounded-lg" type="text" placeholder="Search crypto.." />
                    <button className="ml-2 text-white bg-purple-900 w-16 md:w-20 rounded-lg
                    h-8 md:h-10" type="submit">Search</button>
                </form>


            </div>
        </div>
    )
}

export default Hero