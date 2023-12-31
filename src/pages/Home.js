import React from 'react'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'


const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOption(event.target.value);
    };


    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-lowest') {
            return a.price - b.price;
        } else if (sortOption === 'price-highest') {
            return b.price - a.price;
        } else if (sortOption === 'name') {
            return a.title.localeCompare(b.title);
        } else if (sortOption === 'popularity') {
            return b.rating.count - a.rating.count;
        }
        return 0;
    });




    return (
        <>
            <h2 className=" text-4xl font-bold text-center mt-20">Products</h2>
            <div className="mt-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>


            <div className="mt-4">
                <div className="flex justify-center">
                    <label htmlFor="sort" className="mr-2">
                        Sort by:
                    </label>
                    <select
                        name="sort"
                        id="sort"
                        className="border border-gray-300 rounded-md p-2"
                        value={sortOption}
                        onChange={handleSort}
                    >
                        <option value="">None</option>
                        <option value="price-lowest">Price (Lowest)</option>
                        <option value="price-highest">Price (Highest)</option>
                        <option value="name">Name</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
                {sortedProducts.length > 0 ? (
                    <Products products={sortedProducts} />
                ) : (
                    <div>No products found.</div>
                )}
            </div>
            <Products />
            <Footer />
        </>
    )
}

export default Home