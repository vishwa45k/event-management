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
import LoginPage from "./page/login";
import SignupPage from "./page/signup";

function App() {
  return (
    <>
      <Navbar />
      {/* <TechnicalEvent  /> */}

      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/department/:name" element={<DepartmentEvents />} />
        <Route path="/department/:eventType" element={<StageType />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/sports" element={<Sample />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/deleteevent" element={<DeleteEvent />} />
      </Routes>

      {/* <SignupPage /> */}
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
