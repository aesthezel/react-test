import GifResult from '../GifResult';

const ListOFGifs = ({ gifs }) => {

  return (
    <div className='ListOfGifs'>
        {
        gifs.map(({id, title, url}) => 
                      <GifResult 
                      key={id} 
                      id={id} 
                      title={title} 
                      url={url} 
                      />
          )
        }
    </div>
  );
}

export default ListOFGifs;