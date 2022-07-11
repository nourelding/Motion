import styled from "styled-components";

export const StyledProfileInput = styled.input`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  border: none;
  background: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border-bottom: 1px solid #6e91f6;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    font-weight: 300;
    color: gray;
  }
`;
