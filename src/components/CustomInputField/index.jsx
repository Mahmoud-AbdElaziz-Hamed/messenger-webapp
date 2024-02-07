export const CustomInputField = ({ className, id, type, placeholder }) => {
  return (
    <div className='flex mt-5 w-72 h-fit'>
      <input
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
