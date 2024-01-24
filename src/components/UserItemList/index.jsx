import { usersMock } from "../../utils/users";
import { UserItem } from "../UserItem";

export const UserItemList = () => {
  const users = usersMock.map(({ id, username, isOnline }) => {
    return <UserItem key={id} username={username} isOnline={isOnline} />;
  });

  return <>{users}</>;
};
