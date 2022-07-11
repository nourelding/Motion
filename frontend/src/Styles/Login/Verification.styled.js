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

  h2 {
    letter-spacing: 2px;
    font-size: 30px;
    margin-bottom: 3rem;
  }

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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 2rem;
  width: 500px;
`;

// export const StyledPasswordText = styled.p`
//   font-size: 13px;
//   width: ch;
//   text-align: center;
//   font-style: italic;
// `;
