export const Messageitem = ({ isSender, message, timestamp }) => {
  const messageClasses = `p-4 ${
    isSender
      ? `bg-slate-500 text-white rounded-t-3xl my-2 rounded-bl-3xl ml-auto`
      : `bg-slate-100 text-black rounded-t-3xl my-2 rounded-br-3xl mr-auto`
  }`;
  const timestampClasses = `${
    isSender
      ? `text-gray-500 text-white ml-auto`
      : `text-gray-500 text-black mr-auto`
  }`;
  return (
    <>
      <div className={`flex ${isSender ? `flex-row-reverse` : ""}`}>
        <div className={messageClasses}>{message}</div>
      </div>
      <div className={`flex ${isSender ? `flex-row-reverse` : ""}`}>
        <div className={timestampClasses}>{timestamp}</div>
      </div>
    </>
  );
};
