import styled from "styled-components";

interface HeaderProps {
  onToggleGuide: () => void;
}

export const Header = ({ onToggleGuide }: HeaderProps) => {
  const Header = styled.header`
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
    background-color: #fca311;

    &:hover {
      background-color: #cc7e00;
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  `;

  return (
    <Header>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </Header>
  );
};
