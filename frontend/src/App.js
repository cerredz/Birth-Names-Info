import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";

import "./index.css";
const App = () => {
  return (
    <div className="bg-neutral-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
