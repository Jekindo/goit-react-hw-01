const FriendList = ({ friends }) => {
  return <ul>{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
