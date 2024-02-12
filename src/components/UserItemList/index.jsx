import { usersMock } from '../../utils/users';
import { UserItem } from '../UserItem';

export const UserItemList = ({ isOnline }) => {
  const users = usersMock.map(({ id, username }) => {
    return <UserItem key={id} username={username} isOnline={isOnline} />;
  });

  return <>{users}</>;
};
