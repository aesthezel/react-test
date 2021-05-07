import React, { useState } from 'react';

const GifVault = React.createContext({});

export function GifVaultProvider( { children } ) {

    const [gifs, setGifs] = useState([]);

    return (
        <GifVault.Provider value={{ gifs, setGifs }}>
            { children }
        </GifVault.Provider>
    )
}

export default GifVault;