import { useContext, useEffect, useState } from 'react';
import getGifs from '../../services/getGifs';

import GifVault from '../../context/GifVault';

export function useGifs ({ search } = { search: null }) {

    const [loading, setLoading] = useState(false);
    const { gifs, setGifs } = useContext(GifVault);

    useEffect(() => {
        setLoading(true);
        console.log('Getting the GIFs');

        const searchToStore = search || localStorage.getItem('lastSearch') || 'lmao';
  
        getGifs({ search: searchToStore, results: 20 })
          .then(gifsResult => {
            setGifs(gifsResult);
            setLoading(false);
            localStorage.setItem('lastSearch', search);
          });
      }, [search]);

    return {loading, gifs}
}