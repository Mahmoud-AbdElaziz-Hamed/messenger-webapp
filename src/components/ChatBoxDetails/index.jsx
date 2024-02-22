import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '../Avatar';

export const ChatBoxDetails = ({
  avatar,
  receiver,
  iconClassName,
  onClick,
  icon,
}) => {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-row items-center mx-2'>
        <FontAwesomeIcon
          icon={icon}
          className={iconClassName}
          onClick={onClick}
        />
        <Avatar
          avatar={avatar}
          alt='avatar-img'
          width='35px'
          className='mt-1'
        />
        <div className='mx-3'>
          <div className='text-l flex'>{receiver.username}</div>

          <div className='w-fit flex'>
            <span
              className={`w-2 h-2 rounded-full inline-flex m-auto ${
                receiver.isOnline ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></span>
            <span className='inline-flex font-light ml-1'>
              {receiver.isOnline ? 'online' : 'offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
