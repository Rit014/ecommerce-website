import React from 'react';
import Starts from './Starts';
import Categories from './Categories';
import ProductCard from './ProductCard';
import About from './About';
import Contact from './Contact';
import Image from '.././assets/landing-image.webp';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="text-gray-400 body-font bg-cover bg-center h-screen " style={{backgroundImage: `url(${Image})`}}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl font-medium text-black">Top-notch!!!
                            <br className="hidden lg:inline-block" />Garments and Products
                        </h1>
                        <p className="mb-8 leading-relaxed text-rose-950">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <span className="inline-flex text-rose-white bg-rose-800 border-0 py-2 px-6 focus:outline-non rounded text-lg">Look Your Best On Your Best Day</span>
                            <Link to="/products" className="ml-4 inline-flex text-rose-950 border-0 py-2 px-6 focus:outline-none hover:border border-black hover:text-black rounded text-lg">Explore Now</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className=" object-cover object-center rounded" alt="hero" src={Image} />
                    </div>
                </div>
            </section>
            <Categories />
            <ProductCard />
            <Starts />
            <About />
            <Contact />
        </>
    )


}

export default Home;