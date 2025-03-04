import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {  
  ColumnContainer,
  Footer, 
  Input,
  Title, 
  MdButton, 
  RotatedArrow } from "../components/shared/GlobalStyle";

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

  return (
    <Wrapper>
      <ColumnContainer>

        <Title>
          Search for Github repositories:
        </Title>
  
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%"}} >
          <Input {...register("searchText")} placeholder="Username" />

          <MdButton type="submit" style={{marginTop: "10px"}}>
            Search <RotatedArrow size={20} />
          </MdButton>
        </form>
  
        <Footer>
          <a href="#">
            About Me
          </a>
        </Footer>

      </ColumnContainer>
    </Wrapper>  
  );
}

