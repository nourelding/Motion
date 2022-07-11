import {
  StyledModalBackdrop,
  StyledModalContainer,
  StyledBtnContainer,
  StyledIconContainer,
  StyledBtnClose,
} from "../Styles/ModalDelete.styled";
import { ProfileButton } from "./Shared/button";
import { FaTrash } from "react-icons/fa";

const ModalDelete = () => {
  return (
    <StyledModalBackdrop>
      <StyledModalContainer>
        <StyledBtnClose>X</StyledBtnClose>
        <StyledIconContainer>
          <FaTrash />
        </StyledIconContainer>
        <p>Are you sure you want to do this?</p>
        <StyledBtnContainer>
          <ProfileButton width="150px">NO</ProfileButton>
          <ProfileButton
            width="150px"
            bg={({ theme }) => theme.linearGradient}
            color="white"
          >
            YES
          </ProfileButton>
        </StyledBtnContainer>
      </StyledModalContainer>
    </StyledModalBackdrop>
  );
};
export default ModalDelete;
