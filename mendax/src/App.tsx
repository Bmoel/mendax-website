import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/downloads" element={<Downloads/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
