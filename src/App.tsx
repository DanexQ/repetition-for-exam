import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JS from "./pages/JS";
import CSS from "./pages/CSS";
import PHP from "./pages/PHP";
import SQL from "./pages/SQL";
import HTML from "./pages/HTML";
import Layout from "./components/Layout";

function App() {
  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="javascript" element={<JS />} />
          <Route path="php" element={<PHP />} />
          <Route path="css" element={<CSS />} />
          <Route path="html" element={<HTML />} />
          <Route path="mysql" element={<SQL />} />
        </Route>
      </Routes>
    </SAppContainer>
  );
}

export default App;

const SAppContainer = styled.div`
  background-color: #343b47;
  min-height: 100vh;
`;
