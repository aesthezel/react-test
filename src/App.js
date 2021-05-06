import { Link, Route } from 'wouter';

import './App.css';

import Message from './components/Message.js';
import Title from './components/Title.js';
import ListOFGifs from './components/ListOfGifs.js';

function App() {


  return (
    <div className="App">
      <section className="App-content">

        <Title content="Gif Place"/>
        <Route path="/gif/:search" component={ListOFGifs} />

        <Message message="Quizas te interese buscar..." />
        <Link to="/gif/darksouls" className="link" >GIFs de Dark Souls</Link>
        <Link to="/gif/bloodborne" className="link">GIFs de Bloodborne</Link>
        <Link to="/gif/nier" className="link">GIFs de NieR</Link>

      </section>
    </div>
  );
}

export default App;
