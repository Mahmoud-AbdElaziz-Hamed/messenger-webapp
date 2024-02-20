import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconInputField } from '../../components/IconInputField';
import { UserItemList } from '../UserItemList';

export const ConversationsPanel = ({
  value,
  onChange,
  onSubmit,
  isOnline,
  onClick,
  onKeyDown,
  users,
  onLogoutClick,
  icon,
}) => {
  return (
    <aside className={`bg-whit h-full border-r-2 min-w-fit flex flex-col p-2`}>
      <div className='bg-slate-100 flex rounded-md border-2 flex-shrink-0'>
        <IconInputField
          icon={faMagnifyingGlass}
          placeholder='Search ......'
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className='flex-grow overflow-y-auto'>
        <UserItemList isOnline={isOnline} onClick={onClick} users={users} />
      </div>
      <div className='flex-shrink-0'>
        <FontAwesomeIcon
          icon={icon}
          className='w-10 my-auto ml-2 bg-slate-400 p-3 rounded-full hover:cursor-pointer'
          onClick={onLogoutClick}
        />
      </div>
    </aside>
  );
};
