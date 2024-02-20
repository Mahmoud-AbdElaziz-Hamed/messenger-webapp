import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export const NotFoundPage = () => {
  return (
    <div className='bg-white w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center'>
        <img
          src={logo}
          alt='messanger logo'
          className='w-10 lg:w-20 rounded-3xl'
        />
      </div>
      <div className='text-sm w-full mx-auto text-center lg:text-3xl md:text-2xl p-4 font-serif'>
        This page isn&apos;t available
      </div>
      <div className='text-xs w-full mx-auto text-center lg:text-xl md:text-lg p-1'>
        The link you followed may be broken, or the page may have been removed.
      </div>
      <Link to='/'>
        <button className='p-4 mt-3 rounded-2xl bg-blue-500 text-white text-xs lg:text-xl md:text-lg'>
          Return to messagner
        </button>
      </Link>
    </div>
  );
};
