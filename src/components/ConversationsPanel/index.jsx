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
}) => {
  return (
    <aside
      className={`bg-white ${className} ${
        className !== 'w-screen' ? 'hidden' : ''
      } lg:flex md:flex xl:flex flex-col w-72 p-4 border-r-2`}
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
      <UserItemList isOnline={isOnline} onClick={onClick} searchValue={value} />
    </aside>
  );
};
