import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Environnement from "./routes/Environnement";
import Mitigation from "./routes/Mitigation";
import NavBar from "./containers/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App px-4 sm:px-6 md:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32">
          <NavBar />
          <Routes>
            <Route path="/" element={<Environnement />}>
              <Route path="environnement" element={<Environnement />} />
            </Route>
            <Route path="/mitigation" element={<Mitigation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
