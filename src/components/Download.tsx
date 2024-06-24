import React from 'react'

const Download = () => {
    return (
        <div className='w-full py-5'>
            <div className='container mx-auto flex flex-col items-center lg:flex-row lg:grid lg:grid-cols-3'>
                <div id='download' className='text-white mx-auto flex flex-col items-center  text-center'>
                    <h1 className=' text-5xl font-semibold lg:text-7xl'>COINVUE</h1>
                    <h3 className='text-2xl py-2 mx-20 md:mx-13 font-sans'>Be on the same wavelength with the market 24/7</h3>
                </div>
                <div>
                    <img src="../../src/images/chooseus/crypto-app.png.png" alt="" />
                </div>
                <div className='flex flex-col items-start justify-center py-5'>
                    <div className='text-white px-4 py-3 text-center mx-auto'>
                        <p className='font-sans md:text-xl'>
                            Stay ahead of the curve with real-time market updates, personalized alerts,
                            and expert insights. Get the COINVUE app now and start making informed
                            investment decisions!
                        </p>
                    </div>
                    <div className='flex items-center mx-auto gap-x-3'>
                        <img className=' rounded-lg h-10' src="../../src/images/chooseus/apple.jpg.png" alt="" />
                        <img className=' rounded-lg h-10' src="../../src/images/chooseus/android-app.jpg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download