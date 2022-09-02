import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js';
import PersonCardFunctionalComponent from "./components/PersonCardFunctionalComponent"

var peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]


function App() {
  return (
    <div className="App">
      {peopleArr.map((person, i) => {
        return <PersonCardFunctionalComponent key ={i} person={person} />
      })
      }
    </div>
  );
}

export default App;
