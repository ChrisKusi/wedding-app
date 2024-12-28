// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import QRScannerPage from "./pages/QRScannerPage";
// import AttendeesPage from "./pages/AttendeesPage";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import SplashScreen from "./components/SplashScreen";

// const App: React.FC = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     // Show the splash screen for 4 seconds
//     const timer = setTimeout(() => setShowSplash(false), 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     // Only render the splash screen while `showSplash` is true
//     return <SplashScreen />;
//   }

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<QRScannerPage />} />
//         <Route path="/attendees" element={<AttendeesPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRScannerPage from "./pages/QRScannerPage";
import AttendeesPage from "./pages/AttendeesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show the splash screen for 4 seconds
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    // Only render the splash screen while `showSplash` is true
    return <SplashScreen />;
  }

  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<QRScannerPage />} />
            <Route path="/attendees" element={<AttendeesPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
