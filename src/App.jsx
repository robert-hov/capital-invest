import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

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
