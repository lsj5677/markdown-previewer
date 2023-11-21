import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { MarkdownGuide } from "./components/MarkdownGuide";
import { MarkdownInput } from "./components/MarkdownInput";
import { MarkdownOutput } from "./components/MarkdownOutput";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);

  & > * {
    width: 50%;
    padding: 2em;
    box-sizing: border-box;
  }
`;

function App() {
  const [markdown, setMarkdown] = useState<string>(`# Hello World`);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const onToggleGuide = () => setShowGuide(!showGuide);
  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
}

export default App;
