import ProfilPic from "../Assets/images/users/jennifer.png";
import ThreeDots from "../Assets/svgs/menu.svg";
import Image1 from "../Assets/images/feedPics/image1.png";
import Image2 from "../Assets/images/feedPics/image2.png";
import Image3 from "../Assets/images/feedPics/image3.png";
import Image4 from "../Assets/images/feedPics/image4.png";
import Heart from "../Assets/svgs/heart.svg";
import Share from "../Assets/svgs/share.svg";
import GenericAvatar from "../Assets/svgs/genericAvatar.png";
import { useState } from "react";

import {
  PostWrap,
  EmperorNewGrid,
  HeartLike,
  ProfilHeader,
  Quote,
  NrLikes,
} from "./SinglePostStyle";

function SinglePost({ content, created_at, posted_by, like_count, liked_by }) {
  const dateCreated = new Date();
  dateCreated.getUTCFullYear(created_at);

  const [intialState, setState] = useState(0);
  const PostLike = () => {
    setState(intialState + 1);
  };

  return (
    <PostWrap>
      <ProfilHeader>
        <div>
          <img
            className="profilepic"
            src={posted_by.avatar === null ? `${GenericAvatar}` : posted_by.avatar}
            alt=""
          />
          <div>
            <p>{`${posted_by.first_name} ${posted_by.last_name}`}</p>
            <p className="TimePost">
              {dateCreated.toDateString(created_at)}{" "}
              {`${dateCreated.getHours(created_at)}:${dateCreated.getMinutes(
                created_at
              )}:${dateCreated.getSeconds(created_at)}`}
            </p>
          </div>
        </div>
        <img className="ThreeDots" src={ThreeDots} />
      </ProfilHeader>
      <Quote>
        <p>{content}</p>
      </Quote>
      <EmperorNewGrid>
        {/* {images.map(image => (
          <img
            key={image.id}
            className="Posts"
            src={image.image}
            alt="Picture posted by user"
          />
        ))} */}
        {/* <img className="Posts" src={Image1} alt="Picture posted by user" />
        <img className="Posts" src={Image2} alt="Picture posted by user" />
        <img className="Posts" src={Image3} alt="Picture posted by user" />
        <img className="Posts" src={Image4} alt="Picture posted by user" /> */}
      </EmperorNewGrid>
      <HeartLike>
        <div>
          <button onClick={PostLike} cursor="pointer">
            <img src={Heart} />
          </button>
          <a>Like</a>

          <button className="Share">
            <img src={Share} />
          </button>
          <a>Share</a>
        </div>
        <NrLikes>
          <a>{intialState} Likes</a>
        </NrLikes>
      </HeartLike>
    </PostWrap>
  );
}

export default SinglePost;
