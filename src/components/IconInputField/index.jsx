import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconInputField = ({
  icon,
  onChange,
  value,
  onSubmit,
  placeholder,
}) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        className='w-10 my-auto'
        onClick={(e) => {
          e.target.value = value;
          onSubmit(e);
        }}
      />
      <input
        type='text'
        value={value || ''}
        className='bg-slate-50 w-full h-full rounded-r-xl p-1'
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        onKeyDown={(e) => onSubmit(e)}
      />
    </>
  );
};
