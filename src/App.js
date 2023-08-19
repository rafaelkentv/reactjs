import Navbar from "./Components/Navbar";
import Foot from "./pages/foot";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
      <Navbar />
      <div
       className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </div>

      <Foot/>
      

    </>
  )
}

export default App