import { usersMock } from '../../utils/users';
import { UserItem } from '../UserItem';

export const UserItemList = ({ isOnline, onClick, searchValue }) => {
  const filteredUsers = searchValue
    ? usersMock
        .filter(({ username }) =>
          username.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map(({ id, username }) => (
          <UserItem
            key={id}
            id={id}
            username={username}
            isOnline={isOnline}
            onClick={onClick}
          />
        ))
    : usersMock.map(({ id, username }) => (
        <UserItem
          key={id}
          id={id}
          username={username}
          isOnline={isOnline}
          onClick={onClick}
        />
      ));

  return <>{filteredUsers}</>;
};
