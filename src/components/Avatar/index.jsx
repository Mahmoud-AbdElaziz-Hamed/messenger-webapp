import avatar from "../../assets/pngwing.com.png";

export const Avatar = ({ src = avatar, className, width = "35px" }) => {
  return (
    <img src={src} width={width} alt="user avatar" className={className} />
  );
};
