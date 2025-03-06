import { styled } from 'styled-components';
import {
  ColumnContainer,
  Title,
  MdButton,
  SmButton,
  RotatedArrow,
  NavigateButton,
} from '../components/shared/GlobalStyles';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 95vh;
  width: 100%;
`;

const Bio = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-weight: semibold;
  margin-bottom: 20px;
  max-width: 600px;
  text-align: justify;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  flex-wrap: wrap;
`;

export function AboutMe() {
  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/victoriaCavalcante.pdf';
    link.download = 'victoriaCavalcante.pdf';
    link.click();
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <ColumnContainer>
        <Title>About me</Title>

        <Bio>
          "Hi, I’m Victória, a Brazilian in Spain. I’m a curious and proactive
          individual, passionate about learning, challenges, and growth. As a
          Software Engineer, I’ve improved my technical skills and thrive in
          teamwork, always staying creative and solution-oriented. I'm adaptable
          in new environments and committed to delivering impactful results.
          Moving to Spain is a significant step in my journey, and I’m dedicated
          to making a meaningful impact. If given the opportunity to join MVST,
          I’ll bring my problem-solving mindset and dedication to the team. I’m
          confident you won’t regret having me on board."
        </Bio>

        <SmButton onClick={handleDownload} style={{ width: '50%' }}>
          Download my CV
        </SmButton>

        <ButtonContainer>
          <a
            href="https://www.linkedin.com/in/victoriapcavalcante/"
            target="_blank"
          >
            <MdButton>
              Linkedin <RotatedArrow size={18} />
            </MdButton>
          </a>

          <a href="https://github.com/viiccavalcante" target="_blank">
            <MdButton>
              Github <RotatedArrow size={18} />
            </MdButton>
          </a>
        </ButtonContainer>

        <NavigateButton onClick={handleNavigate}>Back to the project</NavigateButton>
      </ColumnContainer>
    </Wrapper>
  );
}
