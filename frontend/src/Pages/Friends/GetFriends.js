import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Friends from "./Friends";
import Friend from "../../Components/Friend/friend";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllFriends } from "../../Components/Friend/friend";


//export const FriendsList = () => {
//    const newFriend = useSelector(store => store.Friends)
//
//    const renderedFriends = newFriend.map(friend => (
//        <li key ={newFriend.id}>
//            <Link to={`/friend/${Friend.id}`}>{Friend.name}</Link>
//        </li>
//    ))
//    return (
//        <section>
//            <h2>Friends</h2>
//            <ul>{renderedFriends}</ul>
//        </section>
//    )
//}