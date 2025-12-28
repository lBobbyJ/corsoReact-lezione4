import './ProductCard.css';

export default function ProductCard({ id, name, category, price, quantity, onDelete }) {
    return (
        <div className='container-card'>
            <span className='item'>{name}</span>
            <span className='item'>{category}</span>
            <div className='dettaglio'>
                <span>Prezzo: </span>
                <span className='item'>{price}</span>
            </div>
            <div className='dettaglio'>
                <span>Quantità: </span>
                <span className='item'>{quantity}</span>
            </div>
            <button className='btn' onClick={() => { onDelete(id) }}>Rimuovi</button>
        </div>
    );
}