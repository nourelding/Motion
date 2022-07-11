import { Outlet } from "react-router-dom";
import GradientSection from "../Pages/Login/GradientSection";
import { StyledMainContainer } from "../Styles/Login/StyledMainContainer.styled";

const SharedLayout = () => {
  return (
    <StyledMainContainer>
      <GradientSection />
      <Outlet />
    </StyledMainContainer>
  );
};
export default SharedLayout;
