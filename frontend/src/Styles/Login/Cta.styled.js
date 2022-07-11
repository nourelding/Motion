import styled from "styled-components";
import BackgroundImg from "../../Assets/images/background_image.png";

export const StyledContainer = styled.div`
  background-image: url(${require(`../../Assets/images/background_image.png`)}),
    ${({ theme }) => theme.linearGradient};
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  min-height: 100vh;
  width: 40%;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    color: white;
  }

  p {
    color: white;
    max-width: 30ch;
    text-align: center;
    line-height: 1.5;
  }
`;

export const StyledBtnContainer = styled.div`
  width: clamp(200px, 60%, 350px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

export const StyledFooter = styled.footer`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: white;
`;

export const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  gap: 1rem;
`;

export const StyledIcon = styled.img`
  width: 35px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
