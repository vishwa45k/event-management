import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "./components/Sample";
import DepartmentEvents from "./components/DepartmentEvents";
import Technical from "./components/Technical";
import Stage from "./components/Stage";
import Navbar from "./components/Navbar";
import DepartmentCard from "./components/DepartmentCard";

import DeleteEvent from "./components/DeleteEvent";
import StageEvent from "./components/StageEvent";
import StageType from "./components/StageType";

//import Technical from './components/Technical'
// import Sample from './components/Sample'

function App() {
  return (
    <>
      <Navbar />
      {/* <TechnicalEvent  /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<DepartmentCard />} /> */}
        <Route path="/department/:name" element={<DepartmentEvents />} />
        <Route path="/department/:eventType" element={<StageType />} />
        <Route path="/technical" element={<Technical />} />

        <Route path="/sports" element={<Sample />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/deleteevent" element={<DeleteEvent />} />
      </Routes>
    </>
  );
}
const Home = () => {
  return (
    <div className="text-center text-xl">
      Welcome to the Home Page
      <DepartmentCard />
      <StageEvent />
    </div>
  );
};

export default App;
