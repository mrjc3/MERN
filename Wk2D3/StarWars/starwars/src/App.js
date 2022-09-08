import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import People from './components/People.js'
import Planet from './components/Planets.js'
import { useState } from 'react';

function App() {
  const [option, setOption] = useState("");
  const [id, setId] = useState("");

  
  const selections = ["people", "planets"]
  const options = selections.map((selection, i) =>{
    return (<option key={i}>{selection}</option>)
  })

  const handleOptionChange = (option) => {
    setOption(option);
  }

  const handleIdChange = (id) => {
    setId(id);
  }

  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    navigation(`/${option}/${id}`);
  }

  return (
    <div className="App">
     

      <div>
        <form onSubmit={handleSubmit}>
          
          <label>Search for: </label>
          <select onChange={ (e) => handleOptionChange(e.target.value) }>
            {options}
          </select>

          <label>ID: </label>
          <input type="text" onChange={ (e) => handleIdChange(e.target.value)} value={ id }></input>

          <button className='btn btn-primary'>Search</button>
        </form>
      </div>

      <Routes>
        <Route path="people/:id" element={<People />} />
        <Route path="planets/:id" element={<Planet />} />
      </Routes>
      
    </div>
  );
}

export default App;
