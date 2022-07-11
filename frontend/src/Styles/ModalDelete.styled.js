import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-content: center;
`;

export const StyledModalContainer = styled.aside`
  width: 560px;
  height: 374px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 4px;
  position: relative;

  p {
    font-size: 24px;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
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
