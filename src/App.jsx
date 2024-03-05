import Form from './components/Form.jsx';
import './App.css';
import Muitypography from './components/Muitypography.jsx';
import Parent from './components/nextpage.jsx';
import {BrowserRouter as Router , Routes,Route}from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" Component={Form} />
       <Route path="/nextpage" Component={Muitypography}/>
       <Route path="/newpage" Component={Parent}/>
      </Routes>
    </Router>

  );
}

export default App;

