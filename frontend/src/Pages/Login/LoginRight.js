import Form, { RightHeader, SignIn, LoginWrapper } from "./Form";
import AvatarIcon from "../../Assets/svgs/avatar.svg";
import PassIcon from "../../Assets/svgs/password.svg";
import BaseButtonStyled from "../../Components/Shared/button";
import { handleSignInInput } from "../../features/auth/authSlice";
import { signinUser } from "../../features/auth/authSlice";
import search from "../../Assets/svgs/password.svg";
import { UserPass } from "./Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledErrorMessage } from "../../Styles/ErrorMessage.styled";

function LoginRight() {
  const { email, password } = useSelector(store => store.auth.values);
  const { token, errorMessage } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    if (token === undefined) {
      return;
    } else {
      navigate("/user/posts");
    }
  };

  useEffect(() => {
    nextPage();
  }, [token]);

  return (
    <LoginWrapper>
      <RightHeader>
        <p>Don't have an account?</p>
        <Link to="signup">
          <button>SIGN UP</button>
        </Link>
      </RightHeader>
      <section>
        <UserPass
          onSubmit={e => {
            e.preventDefault();
            dispatch(signinUser({ email: email, password: password }));
          }}
        >
          <SignIn>Sign In</SignIn>
          <label>
            <img src={AvatarIcon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Username"
              onChange={e =>
                dispatch(
                  handleSignInInput({
                    value: e.target.value,
                    inputName: e.target.name,
                  })
                )
              }
            />
            <br />
          </label>
          <label>
            <img src={PassIcon} alt="" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={e =>
                dispatch(
                  handleSignInInput({
                    value: e.target.value,
                    inputName: e.target.name,
                  })
                )
              }
            />
          </label>
          {/* {errorMessage &&
            errorMessage.map(error => (
              <StyledErrorMessage>{error}</StyledErrorMessage>
            ))} */}
          <BaseButtonStyled>Sign In</BaseButtonStyled>
        </UserPass>
      </section>
    </LoginWrapper>
  );
}

export default LoginRight;
