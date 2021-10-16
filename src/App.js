import './App.css';
import { Router } from '@reach/router';
import Page_one from './components/Page_one';
import Page_two from './components/Page_two';

function App() {
  return (
    <div className="App">
      <Router>
        <Page_one path='/pageOne' />
        <Page_two path='/pageTwo' />
      </Router>
{/* 
      <Page_one />
      <Page_two /> */}

    </div>
  );
}

export default App;
