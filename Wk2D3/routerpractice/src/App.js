import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Number from './components/Number.js';
import AnyWord from './components/AnyWord';
import MultipleWords from './components/MultipleWords';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        {/* <Route path="/:word" element={<AnyWord />} /> */}
        <Route path="/:word/:wordColor/:backgroundColor" element={<MultipleWords />} />
      </Routes>
    </div>
  );
}

export default App;
