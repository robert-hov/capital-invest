import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CareerPage from "./pages/Career";
import ContactPage from "./pages/Contacts";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProjectInner from "./pages/ProjectInner";
import ProjectsPage from "./pages/Projects";
import ServicePage from "./pages/Services";
import { withNamespaces } from 'react-i18next';
import {detectLanguage} from "./utils/hellper";
import i18n from "./i18n";

function App() {
  document.documentElement.lang = i18n.language;
  const location = useLocation();
  const [curLocation, setCurLocation] = useState(location);
  const changeLanguage = () => {
    detectLanguage()
  }
  document.title = `CAPITAL INVEST`;
  useEffect(() => {
    setCurLocation(location);
  }, [location]);
  useEffect(() => {
    window.addEventListener('load', changeLanguage)
    return () => {
      window.removeEventListener('load', changeLanguage)
    }
  }, [])
  return (
    <div className="App">
      <Layout location={curLocation}>
        <Routes>
          <Route path="/" element={<Home  />} />
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

export default withNamespaces()(App);
