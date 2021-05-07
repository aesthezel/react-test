import ListOFGifs from '../../components/ListOfGifs';
import {useGifs} from '../../hooks/useGifs';

const SearchResults = ({ params }) => {

    const { search } = params;
    const {loading, gifs} = useGifs({ search });

    return (
        <>
            {
                loading ? <h2>I ♥ you Dormilona</h2> : <ListOFGifs gifs={gifs} />
            }
        </>
    )
}

export default SearchResults;