import Logo from "../../Assets/images/logo_white.png";
import GoogleIcon from "../../Assets/svgs/google.svg";
import AppleIcon from "../../Assets/svgs/apple.svg";
import TwitterIcon from "../../Assets/svgs/twitter_icon.svg";
import FacebookIcon from "../../Assets/svgs/facebook_icon.svg";
import InstagramIcon from "../../Assets/svgs/instagram_icon.svg";
import {
  StyledContainer,
  StyledSection,
  StyledHeader,
  StyledBtnContainer,
  StyledFooter,
  StyledSocialContainer,
  StyledIcon,
} from "../../Styles/Login/Cta.styled";
import { StoreButton } from "../../Components/Shared/button";

const Login = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledHeader>
          <img src={Logo} alt="motion company logo" />
          <h1>Motion</h1>
          <p>Connect with friends and the world around you with Motion.</p>
        </StyledHeader>
        <StyledBtnContainer>
          <StoreButton className="cta__button">
            <img src={AppleIcon} alt="" />
          </StoreButton>
          <StoreButton className="cta__button">
            <img src={GoogleIcon} alt="" />
          </StoreButton>
        </StyledBtnContainer>
      </StyledSection>
      <StyledFooter>
        <StyledSocialContainer>
          <StyledIcon src={TwitterIcon} alt="" />
          <StyledIcon src={FacebookIcon} alt="" />
          <StyledIcon src={InstagramIcon} alt="" />
        </StyledSocialContainer>
        <p>&copy; Motion 2018. All rights reserved.</p>
      </StyledFooter>
    </StyledContainer>
  );
};
export default Login;
