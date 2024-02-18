import { CustomInputField } from '../../components/CustomInputField';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useFormik } from 'formik/dist/formik.esm';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const loginURL = 'http://localhost:3000/login';
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(/^\S*$/, 'Password cannot contain spaces'),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (loginUser) => {
    try {
      const response = await axios.post(loginURL, loginUser);
      const token = response.data.token;
      const currentUserId = response.data.userId;
      localStorage.setItem('token', token);
      localStorage.setItem('currentUserId', currentUserId);
      if (response.status === 200) {
        navigate('/chat');
      }
    } catch (error) {
      setErrorMessage(error.response.data);
      if (error.response.data === 'No user found by this mail ,Please signup') {
        setTimeout(() => {
          navigate('/signup');
        }, 2500);
      }
    }
  };
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
      <form
        className='flex flex-col items-center w-full'
        onSubmit={formik.handleSubmit}
      >
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='email'
          name='email'
          type='email'
          placeholder='Email address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='text-red-600 text-xs'>{formik.errors.email}</div>
        )}
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='text-red-600 text-xs'>{formik.errors.password}</div>
        )}
        <div className={errorMessage ? 'text-red-600 text-xs' : 'hidden'}>
          {errorMessage}
        </div>
        <div className='flex justify-center p-2 w-full mt-1'>
          <button
            type='submit'
            className='p-3 rounded-2xl bg-blue-600 text-xs lg:text-xl md:text-lg'
          >
            Log In
          </button>
        </div>
        <div className='flex justify-center w-full text-blue-600 text-xs lg:text-base md:text-base'>
          <Link to='/'>Forget Password ?</Link>
        </div>
        <div className='mt-36 text-blue-600 text-xs lg:text-base md:text-base'>
          <Link to='/signup'>i don&apos;t have account</Link>
        </div>
      </form>
    </div>
  );
};
