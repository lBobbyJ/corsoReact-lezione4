import { useEffect, useState } from 'react'
import './App.css'
import AddProductForm from './components/AddProductForm'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'

function App() {

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : []
  })

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : []
  })

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  }

  const handleDeleteProduct = (id) => {
    setProducts((prev) => {
      return prev.filter(product => product.id !== id)
    })
  }

  return (
    <div className='app'>
      <div className='container'>
        <AddProductForm onAdd={handleAddProduct} />
      </div>
      <div className='container' style={{ padding: 0 }}>
        <FilterBar filters={filters} onChangeFilters={setFilters} />
        <ProductList products={products} filters={filters} onDelete={handleDeleteProduct} />
      </div>
    </div>
  )
}

export default App
