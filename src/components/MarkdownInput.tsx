import styled from "styled-components";

interface MarkdownInputProps {
  value: string;
  onChange: (e: string) => void;
}

const InputContainer = styled.div`
  width: 100%;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1em;
  line-height: 1.2;
  font-family: inherit;
  resize: none;
  outline: none;
  border: 0;
`;

export const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </InputContainer>
  );
};
