import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CareerPage from "./pages/Career";
import ContactPage from "./pages/Contacts";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProjectInner from "./pages/ProjectInner";
import ProjectsPage from "./pages/Projects";
import ServicePage from "./pages/Services";

function App() {
  const location = useLocation();
  const [curLocation, setCurLocation] = useState(location);
  document.title = `CAPITAL INVEST`;
  useEffect(() => {
    setCurLocation(location);
  }, [location]);
  return (
    <div className="App">
      <Layout location={curLocation}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectInner />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
