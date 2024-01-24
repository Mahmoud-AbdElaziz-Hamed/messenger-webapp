import { MessageItemList } from "../MessageItemList/index";
export const ChatBox = () => {
  const fristUserId = 3;
  const secondUserId = 1;
  return (
    <MessageItemList fristUserId={fristUserId} secondUserId={secondUserId} />
  );
};
