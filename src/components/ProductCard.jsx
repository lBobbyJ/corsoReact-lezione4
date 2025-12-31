import './ProductCard.css';

export default function ProductCard({ id, name, category, price, quantity, onDelete }) {
    return (
        <div className='container-card'>

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
                <span className='item'>{name}</span>
                <span className='item'>{category}</span>
                <span className='item'>{price}</span>
                <span className='item'>{quantity}</span>

                <button className='btn' onClick={() => { onDelete(id) }}>Rimuovi</button>
            </div>

        </div>
    );
}