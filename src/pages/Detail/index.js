import React, { useContext } from 'react';

import GifResult from '../../components/GifResult';

import GifVault from '../../context/GifVault';

const Detail = ( { params } ) => {

    const { gifs } = useContext(GifVault);
    const detailGif = gifs.find( findedGif => findedGif.id === params.id);

    console.log(detailGif);

    return (
        <div>
            <p>This is the </p>
            <GifResult { ...detailGif } />
        </div>
    )
}

export default Detail;