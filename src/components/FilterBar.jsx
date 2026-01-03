import { useState } from 'react'
import './FilterBar.css'

export default function FilterBar({ filters, onChangeFilters }) {

    const [menuState, setMenuState] = useState(false);

    const handlerChangeFilters = (nSort) => {
        switch (nSort) {
            case 1:
                onChangeFilters(prev => ({ ...prev, sortNameAsc: true, sortNameDesc: false, sortPriceMin: false, sortPriceMax: false }));
                break;
            case 2:
                onChangeFilters(prev => ({ ...prev, sortNameAsc: false, sortNameDesc: true, sortPriceMin: false, sortPriceMax: false }));
                break;
            case 3:
                onChangeFilters(prev => ({ ...prev, sortNameAsc: false, sortNameDesc: false, sortPriceMin: true, sortPriceMax: false }));
                break;
            case 4:
                onChangeFilters(prev => ({ ...prev, sortNameAsc: false, sortNameDesc: false, sortPriceMin: false, sortPriceMax: true }));
                break;
            default:
                break;
        }
    }

    return (
        <div className="container-filters">
            <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                </svg>
            </span>

            <div className="filter">
                <label name='Nome'>Nome</label>
                <input
                    type="text"
                    name='name'
                    value={filters.name}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, name: e.target.value }))}
                />
            </div>

            <div className="filter">
                <label name=''>Categoria</label>
                <input
                    type="text"
                    name='category'
                    value={filters.category}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, category: e.target.value }))}
                />
            </div>

            <div className="filter">
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                    </svg>
                </span>
                <input
                    type="number"
                    name="prezzoMin"
                    value={filters.priceMin}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, priceMin: e.target.value }))}
                />
            </div>
            <div className="filter">
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>
                <input
                    type="number"
                    name="prezzoMax"
                    value={filters.priceMax}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, priceMax: e.target.value }))}
                />
            </div>

            <div className='sort'>
                <button className='btn-icon' onClick={() => setMenuState(!menuState)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </button>

                <div className={`sortMenu ${menuState ? 'sortMenu--open' : ''}`}>
                    <li onClick={() => handlerChangeFilters(1)}>
                        <span>Nome dalla A alla Z</span>
                        {
                            filters.sortNameAsc ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : ""
                        }
                    </li>
                    <span className='line-separator'></span>
                    <li onClick={() => handlerChangeFilters(2)}>
                        <span>Nome dalla Z alla A</span>
                        {
                            filters.sortNameDesc ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : ""
                        }
                    </li>
                    <span className='line-separator'></span>
                    <li onClick={() => handlerChangeFilters(3)}>
                        <span>Prezzo dal più basso</span>
                        {
                            filters.sortPriceMin ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : ""
                        }
                    </li>
                    <span className='line-separator'></span>
                    <li onClick={() => handlerChangeFilters(4)}>
                        <span>Prezzo dal più alto</span>
                        {
                            filters.sortPriceMax ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : ""
                        }
                    </li>
                </div>
            </div>
        </div>
    )
}