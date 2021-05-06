import {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';

import GifResult from './GifResult.js';

export default function ListOFGifs ({ params }) {

    const { search } = params;

    const [loading, setLoading] = useState([]);

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
      setLoading(true);
      
      console.log('Consiguiendo los GIFS');

      getGifs({ search })
        .then(gifs => {
          setGifs(gifs);
          setLoading(false);
        });
    }, [search]);

    if (loading) return <i>Loading animated photos...</i>

    return gifs.map(({id, title, url}) => 
          <GifResult 
          key={id} 
          id={id} 
          title={title} 
          url={url} 
          />
        );

}