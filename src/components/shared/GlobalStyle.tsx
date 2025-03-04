import { createGlobalStyle, styled } from 'styled-components'
import { MdArrowForward } from 'react-icons/md'

const GlobalStyle = createGlobalStyle`
  body {
      font-family: 'Inter';
  }
`

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
`

const RowContainer = styled.div`
  width: 80rem;
  max-width: 100%;
  padding: 2rem;
  background-color: white;
  border: 3px solid rgba(88, 88, 88, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    width: 90%;
  }
`

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  max-width: 20rem;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(14, 13, 13);
  text-align: center;
  margin-bottom: 1rem;
`

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
`

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
`

const MdButton = styled.button`
  width: 100%;
  background-color: rgb(14, 13, 13);
  color: white;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: semibold;
  font-size: 1.5em;

  &:hover {
    background-color: rgb(32, 32, 32);
    svg {
      transform: scale(1.2);
    }
  }
`

const SmButton = styled.button`
  width: 100%;
  background-color: rgb(14, 13, 13);
  color: white;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: semibold;
  font-size: 1em;

  &:hover {
    background-color: rgb(32, 32, 32);
    svg {
      transform: scale(1.2);
    }
  }
`

const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: rgb(51, 53, 52);
    text-decoration: none;
  }
`

const RotatedArrow = styled(MdArrowForward)`
  transform: rotate(-70deg);
  transition: transform 0.2s ease-in-out;
`

const SmText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgb(14, 13, 13);
`

export {
  GlobalStyle,
  ColumnContainer,
  RowContainer,
  Title,
  Card,
  MdButton,
  SmButton,
  Input,
  Footer,
  RotatedArrow,
  Select,
  SmText,
}
