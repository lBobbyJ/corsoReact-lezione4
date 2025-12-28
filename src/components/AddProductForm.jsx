import { useState } from "react";
import './AddProductForm.css';

export default function AddProductForm({ onAdd }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.category || !formData.price || !formData.quantity) {
            alert('Per inserire corettamente un prodotto è necessario compilare tutti i campi.');
            return;
        }
        onAdd({ ...formData, id: Date.now() });
        setFormData({ name: '', category: '', price: '', qunatity: '' });
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="container-input">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Categoria"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Prezzo"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantità"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="btn" type="submit">Aggiungi prodotto</button>
        </form>
    )
}