import { Link } from 'wouter';
import './index.css';

const GifResult = ( {id, title, url} ) => {

    return (
    <Link to={`/gif/${id}`}>
      <span className="GifResult">
        <img className="thumbs" loading='lazy' src={url} alt={title}/>
      </span>
    </Link>
  );
}

export default GifResult;