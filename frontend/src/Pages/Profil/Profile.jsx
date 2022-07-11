import CloudImg from "../../Assets/images/cloud.png";
import {
  StyledImgContainer,
  StyledMainContainer,
  SinglePostContainer,
} from "../../Styles/Profile.styled";
import UserProfile from "../../Components/UserProfile";
import SinglePost from "../../Components/SinglePost";
import EditProfile from "../../Components/EditProfile";
import { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);

  const showEditProfile = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <StyledMainContainer>
      <StyledImgContainer>
        <img src={CloudImg} alt="" />
      </StyledImgContainer>

      <SinglePostContainer>
        {!show && <UserProfile showEditProfile={showEditProfile} />}
        {show && <EditProfile showEditProfile={showEditProfile} />}
        {/* <SinglePost/>
          <SinglePost/> */}
      </SinglePostContainer>
    </StyledMainContainer>
  );
};
export default Profile;
