import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRScannerPage from "./pages/QRScannerPage";
import AttendeesPage from "./pages/AttendeesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<QRScannerPage />} />
        <Route path="/attendees" element={<AttendeesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
