import React from 'react';
import Image from '../assets/Image-2.png';
import { Link } from  'react-router-dom';

const Header = () => {

    const navigations = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Products',
            path: '/products',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
    ]
    return (
        <>
            <header className="text-gray-400 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link to={`/`} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src={Image} className='w-12' alt="image" />
                        <span className="ml-3 text-xl text-black">Ecommerce</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {
                            navigations.map((navigation, index) =>{
                                return <Link to={navigation.path} className="mr-5 text-xl text-rose-950 hover:text-teal-950 " key={index}>{navigation.name}</Link>
                            })
                        }
                    </nav>
                    <Link to={'/cart'} className="inline-flex bg-violet-600 items-center border-0 py-2 px-3 focus:outline-none hover:bg-purple-900 rounded text-white mt-4 md:mt-0">Go to cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;