import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 900px;
  height: 560px;
  background-color: white;
  display: flex;
  position: relative;
`;

export const StyledLeftContainer = styled.div`
  flex: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledRightContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1) {
    display: flex;
    gap: 1rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMessageContainer = styled.div`
  flex: 4;
  padding-top: 4rem;

  p {
    line-height: 1.5;
  }
`;

export const StyledLikesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StyledMediaContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  svg {
    color: gray;
    cursor: pointer;

    &:hover {
      color: #6e91f6;
    }

    &:focus {
      color: #6e91f6;
    }
  }
`;

export const StyledAccordion = styled.div`
  width: 180px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: -180px;
  top: 50px;
  z-index: 5;
  padding: 0.2rem;

  button {
    font-size: 18px;
    font-weight: 300;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex: 1;
    cursor: pointer;
    z-index: 5;
    color: black;
    background: white;

    &:hover {
      background: rgba(208, 208, 208, 1);
      color: white;
    }
  }
`;

export const StyledBtnClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: -20px;
`;
