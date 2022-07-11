import { StyledGrid } from "../../Styles/Friends.styled";
import Friend from "../../Components/Friend/friend";
import {useDispatch, useSelector} from 'react-redux';
import { FriendsList, getFriends } from "./GetFriends"; 
import { getUsers } from "../../features/user/userSlice";
import { useEffect } from "react";


const Friends = () => {





  const dispatch = useDispatch();
  const { users } = useSelector(store => store.user);
  const { token } = useSelector(store => store.auth);
  //console.log(users)

  useEffect(() => {
    dispatch(getUsers(token))
  }, [])

  return (
    <StyledGrid>
   {users.map(user => (
     <Friend key={user.id} {...user} />
   ))}
    </StyledGrid>
    
  );
};
export default Friends;

// <FriendsList/>