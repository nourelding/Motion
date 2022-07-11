import {
  StyledModalContainer,
  StyledRightContainer,
  StyledLeftContainer,
  StyledHeadingContainer,
  StyledTextWrapper,
  StyledMessageContainer,
  StyledLikesContainer,
  StyledMediaContainer,
  StyledAccordion,
  StyledBtnClose,
} from "../Styles/ModalEditPost.styled";
import { StyledModalBackdrop } from "../Styles/ModalDelete.styled";
import { FaHeart, FaShare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import Image from "../Assets/images/feedPics/image1.png";
import JenniferPic from "../Assets/images/users/jennifer.png";

const ModalEditPost = () => {
  return (
    <StyledModalBackdrop>
      {/* main container */}
      <StyledModalContainer>
        <StyledBtnClose>X</StyledBtnClose>
        {/* left side with picture */}
        <StyledLeftContainer>
          <img src={Image} alt="" />
        </StyledLeftContainer>
        {/* right side with info */}
        <StyledRightContainer>
          {/* top part */}
          <StyledHeadingContainer>
            <div>
              <img src={JenniferPic} alt="" />
              <StyledTextWrapper>
                <p>Jennifer Smith</p>
                <p>Just now</p>
              </StyledTextWrapper>
            </div>
            {/* icon  */}
            <button>
              <BsThreeDotsVertical />
            </button>
          </StyledHeadingContainer>
          {/* middle part */}
          <StyledMessageContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, repellat! Eveniet enim velit animi doloremque.
            </p>
          </StyledMessageContainer>
          {/* lower part */}
          <StyledLikesContainer>
            <p>2 Likes</p>
          </StyledLikesContainer>
          <StyledMediaContainer>
            <button>
              <FaHeart /> Like
            </button>
            <button>
              <FaShare />
              Share
            </button>
            <StyledAccordion>
              <button>
                <MdModeEdit />
                Edit
              </button>
              <button>
                <FaTrash />
                Delete
              </button>
            </StyledAccordion>
          </StyledMediaContainer>
        </StyledRightContainer>
      </StyledModalContainer>
    </StyledModalBackdrop>
  );
};
export default ModalEditPost;
