import './styles/GifResult.css';

export default function Gif ({id, title, url}) {
    return (
    <a href={`#${id}`} className="GifResult">
        <h5>{title}</h5>
        <img className="thumbs" src={url} alt="GIF"/>
    </a>
  );
}