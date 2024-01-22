import { Avatar } from "../Avatar";
export const ChatBoxDetails = ({ AVATAR_SRC, isOnline, userName }) => {
  return (
    <div className="grid grid-cols-4 w-96">
      <div className="m-auto h-12 self-baseline">
        <Avatar
          src={AVATAR_SRC}
          alt="avatar-img"
          className="h-3/4 col-span-1"
        />
      </div>
      <div className="col-span-3 h-3/4">
        <div className="text-lg text-nowrap overflow-hidden">{userName}</div>
        {isOnline ? (
          <div className="w-fit">
            <span className="w-3 h-3 rounded-full inline-grid mr-2 bg-green-500"></span>
            <span className="inline-grid font-light">online</span>
          </div>
        ) : (
          <div className="w-fit">
            <span className="w-2 h-2 rounded-full inline-grid m-auto bg-red-500"></span>
            <span className="inline-grid font-light ml-1">offline</span>
          </div>
        )}
      </div>
    </div>
  );
};
