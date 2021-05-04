import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = (props) => {

    const { setCategories } = props;

    const [category, setCategory] = useState('');

    const changeInputCategory = (event) => {
        setCategory(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (category.trim().length > 2) {
            setCategories(categories => [category, ...categories]);
            setCategory('');
        }
    }

    return (
        <form onSubmit={submitForm} className="form-group">
            <input type="text" className="form-control" value={category} onChange={changeInputCategory} placeholder="Ingrese la categoría a buscar" />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}