import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='h-[40vh] flex justify-center items-center text-white text-sm sm:text-medium md:text-lg'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center mb-4'>
                    <a href="#" className='mr-4'>
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className='mr-4'>
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className='mr-4'>
                        <FaInstagram size={20} />
                    </a>
                    <a href="#">
                        <FaYoutube size={20} />
                    </a>
                </div>
                <div className='flex justify-center pb-3'>
                    <a href="#" className='mr-4 text-white hover:text-gray-200'>
                        Privacy Policy
                    </a>
                    <a href="#" className='mr-4 text-white hover:text-gray-200'>
                        Terms of Use
                    </a>
                </div>
                <p>Copyright &copy; 2024, CoinVue. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;