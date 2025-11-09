import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
