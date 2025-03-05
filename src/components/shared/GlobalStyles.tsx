import { createGlobalStyle, styled } from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

const GlobalStyle = createGlobalStyle`
  body {
      font-family: 'Inter';
  }
`;

const ColumnContainer = styled.div`
  width: 80rem;
  max-width: 60%;
  padding: 2rem;
  background-color: white;
  border: 1px solid rgba(68, 67, 67, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  max-width: 20rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(14, 13, 13);
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 3px solid rgb(212, 209, 209);
  border-radius: 0.2rem;
  transition: 0.2s;
  font-size: 1.1em;
  box-sizing: border-box;

  &:active,
  &:focus {
    border: 3px solid rgb(14, 13, 13);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 3px solid rgb(212, 209, 209);
  border-radius: 0.2rem;
  transition: 0.2s;
  font-size: 1.1em;
  box-sizing: border-box;

  &:active,
  &:focus {
    border: 3px solid rgb(14, 13, 13);
  }
`;

const Option = styled.option`
  background: white;
  color: black;
  font-size: 1em;
  padding: 0.5rem;
  appearance: none;

  &:hover, &:active {
    background: rgb(230, 230, 230);
  }
`;


const Button = styled.button`
  width: 100%;
  background-color: rgb(14, 13, 13);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: semibold;

  &:hover {
    background-color: rgb(32, 32, 32);
    svg {
      transform: scale(1.2);
    }
  }
`;

const BgButton = styled(Button)`
  padding: 0.75rem;
  font-size: 1.5em;
`;

const MdButton = styled(Button)`
  padding: 0.7rem;
  font-size: 1em;
`;

const SmButton = styled(Button)`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.8em;
`;

const Footer = styled.div`
  text-align: center;
  border: 3px solid rgba(68, 67, 67, 0.12);
  padding: 0.5rem;
  border-radius: 1px;
  margin: 1rem auto;

  &:hover {
    border: 3px solid rgb(14, 13, 13);
  }

  a {
    color: rgb(51, 53, 52);
    font-weight: bold;
    text-decoration: none;
  }
`;

const RotatedArrow = styled(MdArrowForward)`
  transform: rotate(-45deg);
  transition: transform 0.2s ease-in-out;
`;

const SmText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgb(14, 13, 13);
`;

const H4 = styled.h4`
  font-size: 1rem;
  font-weight: semibold;
  color: rgb(14, 13, 13);
  margin-bottom: 1rem;
  text-align: center;
`;

export {
  GlobalStyle,
  ColumnContainer,
  Title,
  Card,
  BgButton,
  MdButton,
  SmButton,
  Input,
  Footer,
  RotatedArrow,
  Select,
  Option,
  SmText,
  H4,
};
