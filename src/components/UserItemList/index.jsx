import { UserItem } from '../UserItem';

export const UserItemList = ({ isOnline, onClick, searchValue, users }) => {
  const filteredUsers = searchValue
    ? users
        .filter(({ username }) =>
          username
            .toLowerCase()
            .includes(
              searchValue.toLowerCase() &&
                (({ id }) =>
                  id === Number(localStorage.getItem('currentUserId')))
            )
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
    : users
        .filter(
          ({ id }) => id !== Number(localStorage.getItem('currentUserId'))
        )
        .map(({ id, username }) => (
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
