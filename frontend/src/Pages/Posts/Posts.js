import AvatarIcon from "../../Assets/svgs/avatar.svg";
import PassIcon from "../../Assets/svgs/password.svg";
import Search_icon from "../../Assets/svgs/search_icon.svg";
import Send_button from "../../Assets/svgs/send_button.svg";
import { SendButton } from "../../Components/Shared/button";
import {
  RightHeader,
  LoginWrapper,
  LowBodyBox,
} from "../../Styles/Posts/Poststyle";
import { PopUp } from "../../Components/ModalNewPost";
import { PostFirstComponent } from "../../Components/Shared/postFisrtComponent";
import SinglePost from "../../Components/SinglePost";
import { getPosts } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleTokenStorage } from "../../features/auth/authSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(store => store.user);
  const { token } = useSelector(store => store.auth);

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    // if (token === undefined) {
    //   return;
    // } else {
    // }

    dispatch(getPosts(token));
  }, []);

  return (
    <LoginWrapper>
      {showModal && <PopUp handleModal={handleModal} />}
      <RightHeader>
        <label>
          <img src={Search_icon} />
          <input text="text" placeholder="Search posts" />
        </label>
        <div>
          <button>Like</button>
          <button>Friends</button>
          <button>Follow</button>
        </div>
      </RightHeader>
      <LowBodyBox>
        <PostFirstComponent handleModal={handleModal} />
        {posts.map(post => (
          <SinglePost key={post.id} {...post} />
        ))}
      </LowBodyBox>
    </LoginWrapper>
  );
};
export default Posts;
