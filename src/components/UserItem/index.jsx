import { Avatar } from "../Avatar";

export const UsreItem = ({ userName, AVATAR_SRC, isOnline }) => {
  return (
    <div className="grid grid-cols-4 align-baseline justify-center m-2">
      <div className="m-auto self-baseline">
        <Avatar
          src={AVATAR_SRC}
          alt="avatar-img"
          className="w-3/4 col-span-1"
        />
      </div>
      <div className="col-span-3">
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
