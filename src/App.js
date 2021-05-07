import { Route } from 'wouter';

import './App.css';

import Title from './components/Title';

import Front from './pages/Front';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';

import StaticVault from './context/StaticVault';

function App() {
  return (
    <StaticVault.Provider value={2}>
      <div className="App">
        <section className="App-content">

          <Title content="GIFs Palace 👑" />
          <Route path="/" component={Front} />
          <Route path="/search/:search" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />

        </section>
      </div>
    </StaticVault.Provider>
  );
}

export default App;
