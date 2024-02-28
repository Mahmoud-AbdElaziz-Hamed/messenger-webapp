import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconInputField } from '../IconInputField';
import { UserItemList } from '../UserItemList';

export const UsersSideList = ({
  value,
  onSearchChange,
  onClick,
  onKeyDown,
  users,
  onLogoutClick,
  icon,
  loadUser,
}) => {
  return (
    <aside className='bg-white h-full border-r-2 min-w-fit flex flex-col p-2 w-full'>
      <div className='bg-slate-100 flex mb-3 rounded-md border-2 shrink-0'>
        <IconInputField
          icon={faMagnifyingGlass}
          placeholder='Search ......'
          value={value}
          onChange={onSearchChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className='flex-grow overflow-y-auto'>
        {!loadUser ? (
          <div className='border-t-4 border-b-4 border-blue-500 rounded-full w-5 h-5 mx-auto animate-spin'></div>
        ) : users.length !== 0 ? (
          <UserItemList onClick={onClick} users={users} />
        ) : (
          <div>No results .......</div>
        )}
      </div>
      <div className='shrink-0 pt-2'>
        <FontAwesomeIcon
          icon={icon}
          className='w-10 my-auto ml-2 bg-slate-400 p-3 rounded-full hover:cursor-pointer'
          onClick={onLogoutClick}
        />
      </div>
    </aside>
  );
};
