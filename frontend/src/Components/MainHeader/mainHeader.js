import React, { useEffect, useState } from "react";
import LogoPurple from "../../Assets/images/logo.png";
import PostsLogo from "../../Assets/images/posts_logo.png";
import FriendsIcon from "../../Assets/svgs/icon-friends.svg";
import Bell from "../../Assets/svgs/notification_bell.svg";
import Jennifer from "../../Assets/images/users/jennifer.png";
import ProfileMenu from "../../Assets/svgs/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledPostHeader,
  StyledLogo,
  StyledMenu,
  StyledPostsLogo,
  StyledFriendsIcon,
  StyledLeere,
  StyledNotifications,
  StyledBell,
  StyledProfileMenu,
  SmallLogout,
  Icon,
} from "../../Styles/Posts/Header.styled.js";
import { MdOutlineAccountBox } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const [showPopUp, setshowPopUp] = useState(false);
  const showLogout = () => {
    if (showPopUp === false) {
      setshowPopUp(true);
    } else {
      setshowPopUp(false);
    }
  };

  return (
    <>
      <StyledPostHeader>
        <StyledLogo>
          <img src={LogoPurple} alt="motion company logo" />
          <h1>Motion</h1>
        </StyledLogo>
        <StyledPostsLogo>
          <Link to="posts">
            <img src={PostsLogo} alt="Posts Logo" />
            <h3>Posts</h3>
          </Link>
        </StyledPostsLogo>
        <StyledFriendsIcon>
          <Link to="friends">
            <img src={FriendsIcon} alt="Friends Icon" />
            <h3>Find Friends</h3>
          </Link>
        </StyledFriendsIcon>
        <StyledLeere></StyledLeere>
        <StyledNotifications>
          <StyledBell>
            <img src={Bell} alt="Notification Bell" />
            <p>3</p>
          </StyledBell>

          <button onClick={showLogout}>
            <img src={Jennifer} alt="My Profile Picture" />
          </button>

          <StyledProfileMenu>
            <img src={ProfileMenu} alt="Profile Menu" />
          </StyledProfileMenu>
        </StyledNotifications>
        {showPopUp && (
          <SmallLogout>
            <Link to="profile">
              <div>
                <Icon>
                  <MdOutlineAccountBox size={50} color="grey" />
                </Icon>
                <p>Profile</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                <Icon>
                  <RiLoginBoxLine size={50} color="grey" />
                </Icon>
                <p>Logout</p>
              </div>
            </Link>
          </SmallLogout>
        )}
      </StyledPostHeader>
    </>
  );
};

export default MainHeader;
