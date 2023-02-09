import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import JS from "./pages/JS";
import CSS from "./pages/CSS";
import PHP from "./pages/PHP";
import SQL from "./pages/SQL";
import HTML from "./pages/HTML";
import Layout from "./components/Layout";
import WhatIsJavaScript from "./components/JavaScript/WhatIsJavaScript";
import IncludeJsCode from "./components/JavaScript/IncludeJsCode";
import { useEffect } from "react";
import Prism from "prismjs";

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="javascript">
            <Route path="coToJestJavaScript" element={<WhatIsJavaScript />} />
            <Route path="podlaczanie" element={<IncludeJsCode />} />
            <Route path="wszystko" element={<JS />} />
          </Route>
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
  display: flex;
  justify-content: center;
`;
