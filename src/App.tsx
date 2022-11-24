import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <SAppContainer>
      <Home />
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
  background-color: red;
`;
