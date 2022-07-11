import {
  StyledProfileInput,
  StyledContainer,
} from "../Styles/ProfileInput.styled";

export const ProfileInput = ({ name, type, label }) => {
  return (
    <StyledContainer>
      <label htmlFor={name}>{label}</label>
      <StyledProfileInput type={type} name={name} id={name} />
    </StyledContainer>
  );
};
