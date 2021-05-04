import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = (props) => {

    const { category } = props;
    const limit = 8;
    const { data: gifs, loading } = useFetchGifs(category, limit);

    return (
        <div className="row">
            <div className="col-md-12">
                <h4>{category}</h4>
                {loading && <p>Loading...</p>}
                <div className="d-md-flex flex-md-row align-items-end mb-3">
                    {
                        gifs.map(gif =>
                            <GifGridItem key={gif.id} gif={gif} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
