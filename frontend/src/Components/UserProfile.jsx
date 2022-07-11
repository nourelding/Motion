import JenniferPic from "../Assets/images/users/jennifer.png";
import {
  StyledSection,
  StyledLeftContainer,
  StyledRightContainer,
  StyledProfileInfo,
  StyledStatsInfo,
  StyledContactInfo,
  StyledAboutInfo,
  StyledLikesInfo,
  StyledStatsContainer,
} from "../Styles/UserProfile.styled";
import { ProfileButton } from "./Shared/button";

//import 
const UserProfile = ({showEditProfile}) => {
  return (
    <StyledSection>
      {/* left container */}
      <StyledLeftContainer>
        <div>
          <img src={JenniferPic} alt="user profile" />
          <h2>Jennifer Smith</h2>
          <p>Zürich, Switzerland</p>
        </div>
        <ProfileButton onClick={showEditProfile} >Edit Profile Info</ProfileButton>
      </StyledLeftContainer>
      {/* right container */}
      <StyledRightContainer>
        {/* profile info */}
        <StyledProfileInfo>
          {/* about section */}
          <StyledAboutInfo>
            <h3>About</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate laboriosam quasi nam sint?
            </p>
            {/* contact info */}
            <StyledContactInfo>
              <div>
                <h3>Email</h3>
                <p>jennifersmith@gmail.com</p>
              </div>
              <div>
                <h3>Phone</h3>
                <p>123-123-123</p>
              </div>
            </StyledContactInfo>
          </StyledAboutInfo>
          {/* likes section */}
          <StyledLikesInfo>
            <h3>Things I like</h3>
          </StyledLikesInfo>
        </StyledProfileInfo>
        {/* profile stats */}
        <StyledStatsInfo>
          <StyledStatsContainer>
            <h4>34</h4>
            <p>Posts</p>
          </StyledStatsContainer>
          <StyledStatsContainer>
            <h4>256</h4>
            <p>Likes</p>
          </StyledStatsContainer>
          <StyledStatsContainer>
            <h4>98</h4>
            <p>Friends</p>
          </StyledStatsContainer>
          <StyledStatsContainer>
            <h4>129</h4>
            <p>Followers</p>
          </StyledStatsContainer>
          <StyledStatsContainer>
            <h4>154</h4>
            <p>Following</p>
          </StyledStatsContainer>
        </StyledStatsInfo>
      </StyledRightContainer>
    </StyledSection>
  );
};
export default UserProfile;
