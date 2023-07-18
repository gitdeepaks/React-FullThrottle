import React from "react";
import Friend from "./Friend";
// import FormAddFriend from "./FormAddFriend";

function FriendList({ friends, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
        ></Friend>
      ))}
    </ul>
  );
}

export default FriendList;
