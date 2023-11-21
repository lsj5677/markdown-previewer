import styled from "styled-components";
import Markdown from "react-markdown";

interface MarkdownOutputProps {
  markdown: string;
}

export const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  const test = `# Your markdown here`;

  const OutputContainer = styled.section`
    width: 100%;
    background-color: #e5e5e5;
  `;
  return (
    <OutputContainer>
      <Markdown>{test}</Markdown>
    </OutputContainer>
  );
};
