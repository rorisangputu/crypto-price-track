import React from 'react'
import { LuWallet } from "react-icons/lu";
import { PiPencilLine } from "react-icons/pi";
import { TbReceiptBitcoin } from "react-icons/tb";



const WhyUs = () => {
    return (
        <div className='w-full py-10'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='text-white flex flex-col text-7xl uppercase text-center sm:flex-row lg:text-8xl gap-x-5 font-semibold'>
                    <span>Why</span>
                    <span className=' text-transparent bg-gradient-to-br from-[#2600fc] to-[#ff00ea] bg-clip-text'>Choose Us.</span>
                </div>
                <div className='flex flex-col items-center gap-x-8 py-20 xl:flex-row'>
                    <div className='flex flex-col gap-x-7 gap-y-7'>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12  flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <LuWallet className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12  flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <PiPencilLine className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Select your quantity</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Upload your crypto and set a title, description and price.</p>
                            </div>
                        </div>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <TbReceiptBitcoin className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Confirm Transactions</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Earn by selling your crypto on our marketplace.</p>
                            </div>
                        </div>
                    </div>
                    <img src="../../src/images/chooseus/bitcoin-skyscraper.png" className='w-96 h-96' alt="" />
                    <div className='flex flex-col gap-x-7 py-10 gap-y-7'>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12  flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <LuWallet className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12  flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <PiPencilLine className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>
                        <div className='flex gap-x-5 items-center justify-center rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10  w-[28rem] md:w-[24rem] lg:w-[28rem]'>
                            <div className='rounded-xl w-10 h-10 lg:w-12 lg:h-12  flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <TbReceiptBitcoin className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-2xl lg:text-3xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-lg lg:text-xl font-sans'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs