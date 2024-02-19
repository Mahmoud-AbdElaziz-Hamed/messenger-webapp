import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconInputField = ({
  icon,
  onChange,
  value,
  onSubmit,
  placeholder,
  onKeyDown,
}) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        className='w-10 my-auto'
        onClick={onSubmit}
      />
      <input
        type='text'
        value={value || ''}
        className='bg-slate-50 w-full h-full rounded-r-md p-1'
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        onSubmit={(e) => onSubmit(e)}
        placeholder={placeholder}
      />
    </>
  );
};
