import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { GPT } from "./GPT";
import { Contact } from "./Contact";
import { Chart } from "./Chart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stripe" element={<Home />} />
          <Route path="/gpt" element={<GPT />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
