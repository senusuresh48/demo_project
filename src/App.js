import Form from './components/Form';
import './App.css';
import Muitypography from './components/Muitypography';
import {BrowserRouter as Router , Routes,Route}from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Form />} />
       <Route path="/create" element={<Muitypography />}/>
      </Routes>
      
    </Router>

  );
}

export default App;


<Routes>
  <Route path="/example" element={<Form />} />
 
</Routes>