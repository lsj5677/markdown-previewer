import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { MarkdownGuide } from "./components/MarkdownGuide";
import { MarkdownInput } from "./components/MarkdownInput";
import { MarkdownOutput } from "./components/MarkdownOutput";

function App() {
  const [markdown, setMarkdown] = useState<string>(`# Hello World`);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleChange = () => {};

  const Container = styled.section`
    display: flex;
    height: calc(100vh - 80px);

    & > * {
      width: 50%;
      padding: 2em;
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <Header showGuide={showGuide} setShowGuide={setShowGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput />
      </Container>
    </>
  );
}

export default App;
