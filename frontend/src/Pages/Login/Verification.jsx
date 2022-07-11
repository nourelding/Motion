import inputs from "../../inputs";
import {
  StyledContainer,
  StyledWrapper,
  StyledForm,
  StyledInputContainer,
} from "../../Styles/Login/Verification.styled";
import BaseButtonStyled from "../../Components/Shared/button";
import PaginationCircle from "../../Components/Shared/PaginationCircle";
import { StyledErrorMessage } from "../../Styles/ErrorMessage.styled";
import Input from "../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Verification = () => {
  const { values, status } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, errorMessage, verificationError } = useSelector(
    store => store.auth
  );

  const nextPage = () => {
    if (verificationError === true) {
      return;
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    nextPage();
  }, [verificationError]);

  return (
    <StyledContainer>
      <StyledWrapper>
        <h2>Verification</h2>
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
            dispatch(verifyUser(values));
          }}
        >
          <StyledInputContainer>
            {inputs.map(input => (
              <Input key={input.id} {...input} values={values[input.name]} />
            ))}
          </StyledInputContainer>
          {/* <StyledPasswordText>
            * Password must contain at least 8 to 15 characters, one lowercase
            letter, one uppercase letter, one numeric digit, and one special
            character
          </StyledPasswordText> */}
          {error && (
            <>
              <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
              <StyledErrorMessage>Please try again</StyledErrorMessage>
            </>
          )}
          <BaseButtonStyled>Continue</BaseButtonStyled>
        </StyledForm>
        <PaginationCircle />
      </StyledWrapper>
    </StyledContainer>
  );
};
export default Verification;
