import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js';


function App() {
  return (
    <div className="App">
     <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
     <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Black"}/>
     <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={45} hairColor={"Black"}/>
     <PersonCard firstName={"Maria"} lastName={"Smith"} age={45} hairColor={"Black"}/>
    </div>
  );
}

export default App;
