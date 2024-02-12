import { Avatar } from '../Avatar';
export const ChatBoxDetails = ({
  avatar,
  isOnline,
  username = 'Mahmoud abd elaziz hamed',
}) => {
  return (
    <div className='flex'>
      <div className='mx-2'>
        <Avatar
          avatar={avatar}
          alt='avatar-img'
          width='35px'
          className='mt-1'
        />
      </div>
      <div className='mx-2'>
        <div className='text-l'>{username}</div>

        <div className='w-fit'>
          <span
            className={`w-2 h-2 rounded-full inline-flex m-auto ${
              isOnline ? 'bg-green-500' : 'bg-red-500 '
            }`}
          ></span>
          <span className='inline-flex font-light ml-1'>
            {isOnline ? 'online' : 'offline'}
          </span>
        </div>
      </div>
    </div>
  );
};
