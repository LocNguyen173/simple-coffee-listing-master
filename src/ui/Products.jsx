import ProductCard from "./ProductCard"

import { useEffect, useState } from "react";


export default function Products({ tab }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Lỗi khi tải dữ liệu", err);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();
    }, [])


    const filteredProducts = products.filter((product) => tab === "All" ? product : product.available)


    return (
        isLoading ? <div className="text-white">Loading...</div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 text-white">
                {filteredProducts.map((item) => <ProductCard product={item} key={item.id} />)}
            </div>
    )
}