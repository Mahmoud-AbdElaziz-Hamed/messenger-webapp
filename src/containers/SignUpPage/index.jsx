import { CustomInputField } from '../../components/CustomInputField';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export const SignUpPage = () => {
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
        Connect with your favourite people
      </div>
      <div className='text-sm w-full mx-auto text-center lg:text-3xl md:text-2xl p-3 font-serif'>
        SIGN UP
      </div>
      <form className='flex flex-col items-center w-full'>
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='email_input'
          type='email'
          placeholder='Enter your mail'
        />
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='password'
          type='password'
          placeholder='Enter your password'
        />
        <div className='flex justify-center p-2 w-full mt-1'>
          <button className='p-3 my-2 rounded-2xl bg-blue-600 text-xs lg:text-xl md:text-lg'>
            SIGN UP
          </button>
        </div>
        <div className='flex justify-center w-full text-blue-600 text-xs lg:text-base md:text-base'>
          <span>Already a user ?</span>
          <Link to='/'>Login</Link>
        </div>
      </form>
    </div>
  );
};
