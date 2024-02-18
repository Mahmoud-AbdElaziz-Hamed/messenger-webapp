import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IconInputField } from '../../components/IconInputField';
import { UserItemList } from '../UserItemList';

export const ConversationsPanel = ({
  value,
  onChange,
  onSubmit,
  isOnline,
  onClick,
  className,
  users,
}) => {
  return (
    <aside
      className={`bg-whit h-full border-r-2 ${className} ${
        className !== 'w-screen' ? 'hidden' : ''
      } lg:flex md:flex xl:flex flex-col flex-grow w-72 p-4`}
    >
      <div className='bg-slate-100 flex rounded-xl border-2'>
        <IconInputField
          icon={faMagnifyingGlass}
          placeholder='Search ......'
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className='flex-grow overflow-y-auto'>
        <UserItemList
          isOnline={isOnline}
          onClick={onClick}
          searchValue={value}
          users={users}
        />
      </div>
    </aside>
  );
};
