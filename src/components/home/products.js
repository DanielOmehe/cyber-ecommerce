"use client"
import { useEffect, useState } from "react";
import ProductCard from "../utils/productCard";

const tabs = [
    { name: "New Arrival", tag: "new_arrival" },
    { name: "Bestseller", tag: "bestseller" },
    { name: "Featured", tag: "featured" },
];

const ProductSection = () => {

    const [activeTab, setActiveTab] = useState("new_arrival");
    const [products, setProducts] = useState([]);

    console.log(products);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/data/products.json')
            const data = await response.json();

            setProducts(data);
        }

        fetchProducts();
        
    }, [])

    return (
        <section className="px-50 py-20">
            <article>
                <ul className="flex items-center gap-8">{tabs.map((tab, indx) => <li key={indx.toString()} onClick={() => setActiveTab(tab.tag)} className={`${tab.tag === activeTab ? 'underline text-[#000000] text-base' : 'text-[#8b8b8b] text-base'} cursor-pointer `}>{tab.name}</li>)}</ul>
            </article>
            <article className="grid grid-cols-[(repeat, minmax(268px, 1fr))] grid-rows-2">{products.filter(product => product.tag === activeTab).map((product, indx) => <ProductCard key={indx.toString()} product={product} />)}</article>
        </section>
    )
}

export default ProductSection