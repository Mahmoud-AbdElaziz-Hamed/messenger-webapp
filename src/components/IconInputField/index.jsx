import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconInputField = ({
  icon,
  onChange,
  value,
  onSubmit,
  placeholder,
}) => {
  return (
    <>
      <div className="grid grid-cols-12 border-2 rounded-xl h-10 w-full">
        <FontAwesomeIcon
          icon={icon}
          className="w-max col-span-1 m-auto"
          onClick={() => {
            console.log("clicked");
          }}
        />
        <input
          type="text"
          value={value}
          className="col-span-10"
          onChange={onChange}
          placeholder={placeholder}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
