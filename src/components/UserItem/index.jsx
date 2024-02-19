import { Avatar } from '../Avatar';

export const UserItem = ({ username, avatar, isOnline, onClick, id }) => {
  return (
    <div
      className='flex flex-nowrap my-2 hover:cursor-pointer'
      onClick={() => onClick(id)}
    >
      <div className='mr-2'>
        <Avatar src={avatar} alt='avatar-img' width='35px' />
      </div>
      <div className='flex-row'>
        <div className='flex flex-nowrap text-xs font-semibold sm:text-xs'>
          {username}
        </div>

        <div className='flex-row'>
          <span
            className={`w-2 h-2 rounded-full inline-flex mr-1 ${
              isOnline ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></span>
          <span className='text-xs'>{isOnline ? 'online' : 'offline'}</span>
        </div>
      </div>
    </div>
  );
};
