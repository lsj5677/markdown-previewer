import styled from "styled-components";
import Markdown from "react-markdown";

interface MarkdownOutputProps {
  markdown: string;
}

const OutputContainer = styled.div`
  width: 100%;
  line-height: 1.2;
  background-color: #e5e5e5;
`;

export const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  );
};
