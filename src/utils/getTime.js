export const getTime = (timestamp) => {
  const currentTime = new Date(timestamp);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedMessageTime = `${hours}:${minutes}`;
  return formattedMessageTime;
};
