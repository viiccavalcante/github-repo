import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {
  ColumnContainer,
  Input,
  Title,
  RotatedArrow,
  BgButton,
  NavigateButton,
} from '../components/shared/GlobalStyles';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`;

export function Home() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ searchText: string }>();

  const onSubmit = (data: { searchText: string }) => {
    const username = data.searchText.trim();
    if (username) {
      navigate(`/profile/${username}`);
    }
  };

  const handleNavigate = () => {
    navigate('/about-me');
  };

  return (
    <Wrapper>
      <ColumnContainer>
        <Title>Search for Github repositories:</Title>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }}>
          <Input {...register('searchText')} placeholder="Username" />

          <BgButton type="submit" style={{ marginTop: '10px' }}>
            Search <RotatedArrow size={25} />
          </BgButton>
        </form>

        <NavigateButton onClick={handleNavigate}>About Me</NavigateButton>
      </ColumnContainer>
    </Wrapper>
  );
}
