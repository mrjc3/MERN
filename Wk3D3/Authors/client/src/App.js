import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import {Routes, Route} from 'react-router-dom';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/new" element={<NewAuthor />}/>
            <Route path="/edit/:id" element={<UpdateAuthor />} />
        </Routes>
    </div>
  );
}

export default App;
