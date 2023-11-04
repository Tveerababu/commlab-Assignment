import logo from './logo.svg';
import './App.css';
import Learn from './components/Learn';
import Hosts from './components/Hosts';
import Details from './components/Details';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    <MainPage/>
    <Learn/>
    <Hosts/>
    <Details/>
    </div>
  );
}

export default App;
