import Form, { RightHeader, SignUp, LoginWrapper, UserPass } from "./Form";
import { MdEmail } from "react-icons/md";
import { StyledErrorMessage } from "../../Styles/ErrorMessage.styled";
import BaseButtonStyled from "../../Components/Shared/button";
import PaginationCircle from "../../Components/Shared/PaginationCircle";
import { useSelector, useDispatch } from "react-redux";
import { handleSignUpInput } from "../../features/auth/authSlice";
import { signupUser } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const EmailSignUp = () => {
  const { email } = useSelector(store => store.auth.values);
  const { error, errorMessage, status } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    if (status !== 200) {
      return;
    } else {
      navigate("/confirmation");
    }
  };

  useEffect(() => {
    nextPage();
  }, [status]);

  return (
    <LoginWrapper>
      <RightHeader>
        <p>Already have an account?</p>
        <Link to="/">
          <button>SIGN IN</button>
        </Link>
      </RightHeader>
      <section>
        <UserPass
          onSubmit={e => {
            e.preventDefault();
            dispatch(signupUser(email));
            nextPage();
          }}
        >
          <SignUp>Sign Up</SignUp>
          <label>
            <MdEmail className="mail" color="#A580ff " />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => dispatch(handleSignUpInput(e.target.value))}
            />
          </label>
          {error && (
            <>
              <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
              <StyledErrorMessage>Please try again</StyledErrorMessage>
            </>
          )}
          <BaseButtonStyled>Continue</BaseButtonStyled>
          <PaginationCircle />
        </UserPass>
      </section>
    </LoginWrapper>
  );
};

export default EmailSignUp;
