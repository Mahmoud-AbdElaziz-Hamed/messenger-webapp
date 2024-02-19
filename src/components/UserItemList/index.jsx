import { UserItem } from '../UserItem';

export const UserItemList = ({ isOnline, onClick, users }) => {
  const allUsers = users.map(({ id, username }) => (
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
