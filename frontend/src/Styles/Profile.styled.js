import styled from "styled-components";

export const StyledMainContainer = styled.section`
  min-height: 100vh;
  background-color: aliceblue;
  align-items: center;
`;



export const StyledImgContainer = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 10rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SinglePostContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20rem;
`