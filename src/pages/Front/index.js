import { useState } from 'react';
import { Link, useLocation } from 'wouter';


import Message from '../../components/Message';
import ListOFGifs from '../../components/ListOfGifs';

import {useGifs} from '../../hooks/useGifs';


const GAMER_SEARCHS = ["Bloodborne", "Dark Souls", "Cuphead", "Loop Hero", "Bloodstained", "NieR"];

const Front = () => {

    const [keyword, setKeyword] = useState('');
    const [path, toLocation] = useLocation()

    const { loading, gifs } = useGifs();

    const handleSubmit = event => {
        event.preventDefault();
        toLocation(`/search/${keyword}`);
        console.log(path);
    }

    const handleChange = event => {
        setKeyword(event.target.value);
    }

    return (
        <>
            <Message message="Perhaps you want to search" />
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Anything..." onChange={handleChange} value={keyword} />
                <button> 🔎 </button>
            </form>

            <hr />

            <h3>Last searched</h3>
            <ListOFGifs gifs={gifs} />

            <hr />

            <small>Gifs populares</small>
            <ul className='horizontal'>
                {
                   GAMER_SEARCHS.map( ( popularSearchs ) => (
                        <li key={popularSearchs}>
                            <Link to={`/search/${popularSearchs}`} className="link" >{popularSearchs}</Link>
                        </li>
                    )
                   )
                }
            </ul>
            
        </>
    );
}

export default Front;