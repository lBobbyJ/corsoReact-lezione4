import { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ id, name, category, price, quantity, onDelete }) {
    
    const [deleteItem, setDeleteItem] = useState(false);
    
    return (
        <div className={`container-card ${deleteItem ? 'animationDelete' : ''}`}>

            <div className='wrapper-drag-handle'>
                <div className='drag-handle'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='container-dettagli'>
                <span className='item'><span>{name}</span></span>
                <span className='item'><span>{category}</span></span>
                <span className='item'><span style={{textAlign: "end"}}>{price}</span><span>€</span></span>
                <span className='item'><span style={{textAlign: "end"}}>{quantity}</span><span>pcs</span></span>

                <button className='btn' onClick={() => { onDelete(id); setDeleteItem(true) }}>Rimuovi</button>
            </div>

        </div>
    );
}