import React from "react";
import Friend from "./Friend";
// import FormAddFriend from "./FormAddFriend";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </ul>
  );
}

export default FriendList;
