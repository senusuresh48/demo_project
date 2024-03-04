import Form from './components/Form';
import './App.css';
import Muitypography from './components/Muitypography';
import {BrowserRouter as Router , Routes,Route}from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Form />} />
       <Route path="/nextpage" element={<Muitypography />}/>
      </Routes>
    </Router>

  );
}

export default App;

