import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Footer from "./pages/Layout/Footer";
import Header from "./pages/Layout/Header";

function App() {
  return (
    <div className="App">
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Layout>
    </div>
  );
}

export default App;
