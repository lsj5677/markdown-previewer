import styled from "styled-components";

interface HeaderProps {
  onToggleGuide: () => void;
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #14213d;
  padding: 1em 2em;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  color: #e5e5e5;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #fca311;
  cursor: pointer;

  &:hover {
    background-color: #cc7e00;
    color: #fff;
    transition: background-color 0.2s ease-in-out;
  }
`;

export const Header = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderWrap>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderWrap>
  );
};
