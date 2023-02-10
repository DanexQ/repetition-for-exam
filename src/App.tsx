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
import DeclaringVariables from "./components/JavaScript/DeclaringVariables";
import ConditionalStatements from "./components/JavaScript/ConditionalStatements";
import PoppingUpModals from "./components/JavaScript/PoppingUpModals";
import Loops from "./components/JavaScript/Loops";
import Functions from "./components/JavaScript/Functions";
import { BuiltInFunctions } from "./components/JavaScript/BuiltInFunctions";
import FormHandling from "./components/JavaScript/FormHandling";
import ChangeContent from "./components/JavaScript/ChangeContent";
import ChangeStyle from "./components/JavaScript/ChangeStyle";
import Events from "./components/JavaScript/Events";

function App() {
  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="javascript">
            <Route index element={<JS />}></Route>
            <Route path="coToJestJavaScript" element={<WhatIsJavaScript />} />
            <Route path="podlaczanie" element={<IncludeJsCode />} />
            <Route
              path="deklarowanieZmiennych"
              element={<DeclaringVariables />}
            />
            <Route
              path="instrukcjeWarunkowe"
              element={<ConditionalStatements />}
            />
            <Route path="zdarzenia" element={<Events />} />
            <Route path="okienka" element={<PoppingUpModals />} />
            <Route path="petle" element={<Loops />} />
            <Route path="funkcje" element={<Functions />} />
            <Route path="funkcjeWbudowane" element={<BuiltInFunctions />} />
            <Route path="pobieranieWartosci" element={<FormHandling />} />
            <Route path="zmianaWnetrza" element={<ChangeContent />} />
            <Route path="zmianaStylu" element={<ChangeStyle />} />
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
  background-color: #171717;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
