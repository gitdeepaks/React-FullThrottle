import React from "react";
import FrienList from "./FriendList";

function Friend({ friend }) {
  return <li>{friend.name}</li>;
}

export default Friend;
