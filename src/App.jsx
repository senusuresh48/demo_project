import Form from "./components/Form.jsx";
import "./App.css";
import Muitypography from "./components/Muitypography.jsx";
import Parent from "./components/nextpage.jsx";
import MyApp from "./components/contextusage/child.jsx";
import Login from "./pages/Login/Login.jsx";
import Section from "./components/contextusage/Section.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/demo_project" Component={Form} />
        <Route path="/nextpage" Component={Muitypography} />
        <Route path="/newpage" Component={Parent} />
        <Route path="/page" Component={MyApp} />
        <Route path="/demo" Component={Login} />
        <Route path="/demo1" Component={Section} />
      </Routes>
    </Router>
  );
}

export default App;
