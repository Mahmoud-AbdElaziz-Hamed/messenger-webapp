export const CustomInputField = ({
  className,
  id,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
}) => {
  return (
    <div className='flex mt-5 w-72 h-fit'>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
