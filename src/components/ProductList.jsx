import { useMemo } from "react";
import './ProductList.css'
import ProductCard from "./ProductCard";

export default function ProductList({ products, filters, onDelete }) {

    const sortedFilteredProducts = useMemo(() => {
        let result = products
            .filter(product => !filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase()))
            .filter(product => !filters.category || product.category.toLowerCase().includes(filters.category.toLowerCase()))
            .filter(product => !filters.priceMin || Number(product.price) >= Number(filters.priceMin))
            .filter(product => !filters.priceMax || Number(product.price) <= Number(filters.priceMax));

        if (filters.sortNameAsc) {
            result.sort((a, b) => a.name.localeCompare(b.name))
        }
        if (filters.sortNameDesc) {
            result.sort((a, b) => b.name.localeCompare(a.name))
        }
        if (filters.sortPriceMin) {
            result.sort((a, b) => a.price - b.price)
        }
        if (filters.sortPriceMax) {
            result.sort((a, b) => b.price - a.price)
        }

        return result;
    }, [products, filters]);


    return (
        <div className='wrapper-products'>
            {
                sortedFilteredProducts.length > 0 ?
                    sortedFilteredProducts.map(product => <ProductCard key={product.id} {...product} onDelete={onDelete} />) :
                    <p>Nessun prodotto trovato</p>
            }
        </div>
    )
}