import { useState } from 'react';
import avatar from '../../assets/pngwing.com.png';

export const Avatar = ({ src = avatar, className, width }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };
  return (
    <img
      src={error ? '../../assets/pngwing.com.png' : src}
      width={width}
      className={className}
      alt='user avatar'
      onError={handleError}
    />
  );
};
