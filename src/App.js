import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desciption/:id" element={<Description />} />
          <Route path="*" element={<h3>404 Nothing Found</h3>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
