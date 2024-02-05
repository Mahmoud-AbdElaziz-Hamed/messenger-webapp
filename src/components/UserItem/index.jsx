import { Avatar } from '../Avatar';

export const UserItem = ({
  username = 'Mahmoud abd elaziz hamed',
  avatar,
  isOnline,
}) => {
  return (
    <div className='flex flex-nowrap my-2'>
      <div className='mr-2'>
        <Avatar src={avatar} alt='avatar-img' width='35px' />
      </div>
      <div className='flex-row'>
        <div className='text-xs font-semibold sm:text-xs'>{username}</div>

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
