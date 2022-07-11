import {
  StyledSection,
  StyledLeftContainer,
  StyledRightContainer,
  StyledProfileInfo,
  StyledProfileForm,
  StyledProfileBtnContainer,
  StyledFileUploadInput,
  StyledLabel,
  StyledAccordion,
  StyledInputContainer,
  StyledLikedInfo,
  StyledForm,
} from "../Styles/EditProfile.styled";
import profileInfo from "../profileInfo";
import JenniferPic from "../Assets/images/users/jennifer.png";
import { ProfileButton, LikedButton } from "../Components/Shared/button";
import { ImUpload } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { ProfileInput } from "../Components/ProfileInput";
import UserProfile from "./UserProfile";
import Profile from "../Pages/Profil/Profile";

const EditProfile = ({showEditProfile}) => {
  return (
    <StyledSection>
      {/* letf container */}
      <StyledLeftContainer>
        {/* top part with image and button */}
        <StyledProfileInfo>
          <img src={JenniferPic} alt="" />
          <ProfileButton>Update Image</ProfileButton>
          <StyledProfileForm>
            <StyledAccordion>
              <StyledLabel htmlFor="file">
                <ImUpload />
                Upload
              </StyledLabel>
              <StyledFileUploadInput type="file" id="file" />
              <button>
                <FaTrash /> Remove
              </button>
            </StyledAccordion>
          </StyledProfileForm>
        </StyledProfileInfo>
        {/* lower part with two buttons */}
        <StyledProfileBtnContainer>
          <ProfileButton>Delete Account</ProfileButton>
          <ProfileButton
            width="100%"
            bg={({ theme }) => theme.linearGradient}
            color="white"
            onClick={showEditProfile}
          >
            Save
          </ProfileButton>
        </StyledProfileBtnContainer>
      </StyledLeftContainer>
      {/* right container */}
      <StyledRightContainer>
        {/* top part with profile info */}
        <StyledInputContainer>
          {profileInfo.slice(1).map(profile => (
            <ProfileInput key={profile.id} {...profile} />
          ))}
        </StyledInputContainer>
        {/* lower part with likes info */}
        <StyledLikedInfo>
          <h3>Things I like</h3>
          <div>
            <LikedButton>
              Cooking <span>x</span>
            </LikedButton>
            <LikedButton>
              Travel <span>x</span>
            </LikedButton>
            <LikedButton>
              Reading <span>x</span>
            </LikedButton>
            <LikedButton>
              Running <span>x</span>
            </LikedButton>
          </div>
        </StyledLikedInfo>
        {/* input field to add things the user likes */}
        <StyledForm>
          <label>
            <input type="text" placeholder="Type Something..." />
          </label>
          <ProfileButton>Add</ProfileButton>
        </StyledForm>
      </StyledRightContainer>
    </StyledSection>
  );
};
export default EditProfile;
