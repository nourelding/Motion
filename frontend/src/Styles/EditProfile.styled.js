import styled from "styled-components";

export const StyledSection = styled.section`
  width: 1152px;
  height: 730px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 0 2rem;
  margin: 0 auto;
  position: absolute;
  background: white;
  top: 50%;
  transform: translateY(-25%);
`;

export const StyledLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  img {
    width: 95px;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 3;
  padding: 3rem;
`;

export const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledProfileBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledFileUploadInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 300;
  color: black;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  flex: 1;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const StyledAccordion = styled.div`
  width: 180px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  button {
    font-size: 18px;
    font-weight: 300;
    color: black;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex: 1;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledInputContainer = styled.div`
  width: 90%;
  display: grid;
  gap: 1rem;
  row-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledLikedInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 14px;
    font-weight: 300;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 1rem;

  label {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:focus {
      outline: none;
      border-bottom: 1px solid #6e91f6;
    }
  }
`;
