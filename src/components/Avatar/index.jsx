import avatar from '../../assets/pngwing.com.png';

export const Avatar = ({ src = avatar, className, width }) => {
  return (
    <img src={src} width={width} className={className} alt='user avatar' />
  );
};
