import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JS from "./pages/JS";

function App() {
  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Navbar />}>
          <Route path="javascript" element={<JS />} />
        </Route>
      </Routes>
    </SAppContainer>
  );
}

export default App;

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #222;
`;
