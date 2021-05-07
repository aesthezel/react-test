import './index.css';

const GifResult = ( {id, title, url} ) => {
    return (
    <a href={`/gif/${id}`} className="GifResult">
        <img className="thumbs" loading='lazy' src={url} alt={title}/>
    </a>
  );
}

export default GifResult;