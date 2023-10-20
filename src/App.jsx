import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tugas from "./tugas/index";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Tugas />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
