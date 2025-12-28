import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import AddProductForm from './components/AddProductForm'

function App() {

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  })

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  }

  const handleDelete = (id) => {
    setProducts((prev) => {
      return prev.filter(product => product.id !== id)
    })
  }

  return (
    <div className='app'>
      <div className='container'>
        <AddProductForm onAdd={handleAddProduct} />
      </div>
      <div className='container'>
        <div className='wrapper-products'>
          {
            products.length > 0 ?
              products.map(product => <ProductCard key={product.id} {...product} onDelete={handleDelete} />) :
              <p>Nessun prodotto trovato</p>
          }
        </div>
      </div>
    </div>
  )
}

export default App
