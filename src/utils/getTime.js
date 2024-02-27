export const getTime = (timestamp) => {
  const currentTime = new Date(timestamp);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedMinutes =
    minutes.toString().length === 1 ? '0' + minutes : minutes;

  const formattedMessageTime = `${hours}:${formattedMinutes}`;
  return formattedMessageTime;
};
