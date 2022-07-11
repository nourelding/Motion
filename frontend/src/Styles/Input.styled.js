import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border-bottom: 1px solid #6e91f6;
  }
`;
