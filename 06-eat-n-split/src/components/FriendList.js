import React from "react";
import Friend from "./Friend";
// import FormAddFriend from "./FormAddFriend";

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        ></Friend>
      ))}
    </ul>
  );
}

export default FriendList;
