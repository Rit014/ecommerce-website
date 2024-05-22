import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Features from './Features';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json();
            // console.log(data);
            setCategories(data);
        }

        fetchProducts();
    }, [])

    if (categories === 0) return <div>Loading....</div>
    return (
        <>
            {/* <Features cards={categories} /> */}
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-purple-400 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">Everything You Want</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            categories.map((card, index) => {
                                return (
                                    <Link to={`/categories/${card}`} className="p-4 md:w-1/3 " key={index}>
                                        <div className="flex rounded-lg h-full bg-gray-100 bg-opacity-60 p-8 flex-col cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-black flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className="text-black text-lg title-font font-medium captitalize">{card || 'Example card'}</h2>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                                <a className="mt-3 text-purple-400 inline-flex items-center">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories;