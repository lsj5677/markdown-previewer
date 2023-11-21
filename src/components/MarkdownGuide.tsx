import styled from "styled-components";

export const MarkdownGuide = () => {
  const GuiedContainer = styled.section`
    padding: 1em 2em;
    background-color: #f5f5f5;
  `;
  const Title = styled.h3`
    font-size: 1.2em;
    border-bottom: 1px solid #000;
    margin: 0;
  `;
  const CodeWrap = styled.article`
    display: flex;
    gap: 2em;
    padding: 1em;
    border-bottom: 1px solid #e5e5e5;

    &:last-child {
      border-bottom: 0;
    }
  `;

  const CodeTitle = styled.span`
    font-weight: bold;
    width: 20%;
    height: fit-content;
    background-color: #e5e5e5;
    padding: 0 0.3em;
  `;

  const CodeContent = styled.ul`
    padding: 0;
    margin: 0;
  `;
  const Code = styled.li`
    position: relative;
    padding-left: 1em;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 3px;
      height: 3px;
      background-color: #14213d;
      top: 50%;
      left: 6px;
      transform: translateY(-50%);
    }
  `;

  return (
    <GuiedContainer>
      <Title>Markdown Cheat sheet</Title>
      <CodeWrap>
        <CodeTitle>Headings</CodeTitle>
        <CodeContent>
          <Code># Heading 1</Code>
          <Code># Heading 2</Code>
          <Code># Heading 3</Code>
        </CodeContent>
      </CodeWrap>
      <CodeWrap>
        <CodeTitle>Phrase emphasis</CodeTitle>
        <CodeContent>
          <Code>*italic*</Code>
          <Code>**bold**</Code>
        </CodeContent>
      </CodeWrap>
      <CodeWrap>
        <CodeTitle>Link and Image</CodeTitle>
        <CodeContent>
          <Code>[Link](http://a.com)</Code>
          <Code>![Image](http://url/a.png)</Code>
        </CodeContent>
      </CodeWrap>
      <CodeWrap>
        <CodeTitle>Lists</CodeTitle>
        <CodeContent>
          <Code>1. A list item</Code>
          <Code>- A list item</Code>
        </CodeContent>
      </CodeWrap>
      <CodeWrap>
        <CodeTitle>Inline and Block</CodeTitle>
        <CodeContent>
          <Code>`inline code`</Code>
          <Code>```block code```</Code>
        </CodeContent>
      </CodeWrap>
    </GuiedContainer>
  );
};
