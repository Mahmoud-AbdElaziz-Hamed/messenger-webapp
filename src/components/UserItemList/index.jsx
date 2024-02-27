import { UserItem } from '../UserItem';

export const UserItemList = ({ onClick, users }) => {
  const allUsers = users.map(({ id, username, isOnline }) => (
    <UserItem
      key={id}
      id={id}
      username={username}
      isOnline={isOnline}
      onClick={onClick}
    />
  ));

  return <>{allUsers}</>;
};
