import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Programacion']);

    return (
        <div className='container mt-4'>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            {
                categories.map(category => <GifGrid key={category} category={category} />)
            }
        </div>
    )
}
