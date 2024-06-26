import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesProducts = () => {

    const { name } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
                const data = await response.json();
                // console.log(data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])

    if (products.length === 0) return <div className='flex flex-row text-xl text-black items-center justify-center'>Loading...</div>
    return (
        <>
            <section className="text-gray-400 body-font">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-purple-400 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">Most Popular Products</h1>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((product, index) => {
                                // console.log(product)
                                const { id, title, price, description, category, image } = product;
                                return (
                                    <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" key={index}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-uppercase">{category}</h3>
                                            <h2 className="text-black title-font text-lg font-medium text-uppercase">{title}</h2>
                                            <p className="mt-1">${price}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default CategoriesProducts;
