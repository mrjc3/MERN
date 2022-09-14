import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/product/:id" element={<Detail />}/>
      </Routes>
    
    </div>
  );
}

export default App;
