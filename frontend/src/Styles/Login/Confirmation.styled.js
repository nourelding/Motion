import styled from "styled-components";

export const StyledContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex: 1;
`;

export const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  p {
    text-align: center;
    line-height: 1.5;
  }

  img {
    width: 20%;
    max-width: 100px;
  }
`;

export const StyledCheckMark = styled.span`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  border: 3px solid #a580ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #a580ff;
`;
