import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sample from "./components/Sample";
import DepartmentEvents from "./components/DepartmentEvents";
import Technical from "./components/Technical";
import Stage from "./components/Stage";
import DepartmentCard from "./components/DepartmentCard";
import DeleteEvent from "./components/DeleteEvent";
import StageEvent from "./components/StageEvent";
import StageType from "./components/StageType";
import LoginPage from "./page/login";
import SignupPage from "./page/signup";
import ProtectedRoute from "./router/ProtectedRoute";
import PurchaseTable from "./page/pass/PassTable";
import PassDetails from "./page/pass";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/department/:name"
          element={
            <ProtectedRoute>
              <DepartmentEvents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/department/type/:eventType"
          element={
            <ProtectedRoute>
              <StageType />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technical"
          element={
            <ProtectedRoute>
              <Technical />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sports"
          element={
            <ProtectedRoute>
              <Sample />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stage"
          element={
            <ProtectedRoute>
              <Stage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deleteevent"
          element={
            <ProtectedRoute>
              <DeleteEvent />
            </ProtectedRoute>
          }
        />
        <Route path="/pass-purchase" element={<PassDetails />} />
      </Routes>
    </>
  );
}

// Home component (protected)
const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-center text-xl">
      {/* Welcome {storedUser?.name || "Guest"} */}
      <DepartmentCard />
      <StageEvent />
    </div>
  );
};

export default App;
