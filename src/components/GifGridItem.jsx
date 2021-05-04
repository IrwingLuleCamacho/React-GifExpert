import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = (props) => {

    const { gif } = props;

    return (
        <div className="d-flex flex-column">
            <img key={gif.id} src={gif.url} className="img-fluid shadow-1-strong rounded m-1" alt={gif.title} />
        </div>
    )
}

GifGridItem.propTypes = {
    gif: PropTypes.object.isRequired
}