import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import SearchForm from './components/SearchForm';
import Stories from './components/Stories';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Buttons />
      <Stories />
    </div>
  );
}

export default App;
