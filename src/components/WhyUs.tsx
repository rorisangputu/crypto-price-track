import React from 'react';
import { LuWallet } from "react-icons/lu";
import { PiPencilLine } from "react-icons/pi";
import { TbReceiptBitcoin } from "react-icons/tb";
import skyscrape from "../../src/images/chooseus/bitcoin-skyscraper.png";

const WhyUs = () => {
    return (
        <div className='w-full pt-10 pb-5'>
            <div className='w-[90%] mx-auto flex flex-col items-center'>
                {/* Title Section */}
                <div id='why-us' className='text-white flex flex-col text-4xl uppercase text-center sm:flex-row lg:text-6xl gap-x-5 font-semibold'>
                    <span>Why</span>
                    <span className='text-transparent bg-gradient-to-br from-[#2600fc] to-[#ff00ea] bg-clip-text'>Choose Us.</span>
                </div>
                
                {/* Choose Us Reasons */}
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-10 py-16 items-center'>
                    <div className='flex flex-col gap-7'>
                        {/* Reason 1 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <LuWallet className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-base md:text-lg'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>

                        {/* Reason 2 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <PiPencilLine className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Select your quantity</h1>
                                <p className='py-2 text-base md:text-lg'>Upload your crypto and set a title, description, and price.</p>
                            </div>
                        </div>

                        {/* Reason 3 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <TbReceiptBitcoin className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Confirm Transactions</h1>
                                <p className='py-2 text-base md:text-lg'>Earn by selling your crypto on our marketplace.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <img src={skyscrape} className='w-64 h-64 lg:h-80 lg:w-80 mx-auto xl:my-0' alt="Skyscraper" />
                    
                    <div className='flex flex-col gap-7'>
                        {/* Repeated Reason 1 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <LuWallet className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Connect your wallet</h1>
                                <p className='py-2 text-base md:text-lg'>Use Metamask or Binance to connect to the app.</p>
                            </div>
                        </div>

                        {/* Repeated Reason 2 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <PiPencilLine className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Select your quantity</h1>
                                <p className='py-2 text-base md:text-lg'>Upload your crypto and set a title, description, and price.</p>
                            </div>
                        </div>

                        {/* Repeated Reason 3 */}
                        <div className='flex items-center justify-center gap-5 rounded-xl bg-slate-300 bg-opacity-5 border border-white border-opacity-10 w-full'>
                            <div className='rounded-xl w-12 h-12 flex justify-center items-center bg-gradient-to-br from-[#2600fc] to-[#ff00ea]'>
                                <TbReceiptBitcoin className='text-white w-8 h-8' />
                            </div>
                            <div className='py-5 w-3/4 text-white'>
                                <h1 className='uppercase text-xl md:text-2xl font-bold'>Confirm Transactions</h1>
                                <p className='py-2 text-base md:text-lg'>Earn by selling your crypto on our marketplace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
