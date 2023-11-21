import styled from "styled-components";

interface MarkdownInputProps {
  value: string;
  onChange: () => void;
}

export const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
  const InputContainer = styled.section`
    width: 100%;
  `;
  const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 1em;
    font-family: sans-serif;
    resize: none;
    outline: none;
    border: 0;
  `;
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};
