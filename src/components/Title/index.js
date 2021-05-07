import { Link } from 'wouter';

const Title = ({ content }) => {

    return (
        <Link to="/">
            <h1>{content}</h1>
        </Link>
    );
}

export default Title;