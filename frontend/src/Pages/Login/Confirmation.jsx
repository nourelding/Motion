import BaseButtonStyled from "../../Components/Shared/button";
import {
  StyledContainer,
  StyledWrapper,
  StyledCheckMark,
} from "../../Styles/Login/Confirmation.styled";
import PaginationCircle from "../../Components/Shared/PaginationCircle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const { email } = useSelector(store => store.auth.values);

  return (
    <StyledContainer>
      <StyledWrapper>
        <h2>Congratulations</h2>
        <StyledCheckMark>&#10003;</StyledCheckMark>
        <div>
          <p>We've sent you a confirmation code to your email</p>
          <p>{email}</p>
        </div>
        <Link to="/verification">
          <BaseButtonStyled>Continue</BaseButtonStyled>
        </Link>
        <PaginationCircle />
      </StyledWrapper>
    </StyledContainer>
  );
};
export default Confirmation;
