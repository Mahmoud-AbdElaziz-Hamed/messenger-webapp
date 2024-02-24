import { CustomInputField } from '../../components/CustomInputField';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useFormik } from 'formik/dist/formik.esm';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { SIGNUP_URL } from '../../constants';

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (newUser) => {
    try {
      const response = await axios.post(SIGNUP_URL, newUser).catch((error) => {
        if (error.code === 'ERR_NETWORK') {
          alert(
            'Network error occurred. Please check your internet connection.'
          );
        } else {
          throw error;
        }
      });
      const token = response.data.token;
      const currentUserId = response.data.userId;
      localStorage.setItem('token', token);
      localStorage.setItem('currentUserId', currentUserId);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.response.data);
      if (error.response.data === 'User with this email already exists') {
        setTimeout(() => {
          navigate('/login');
        }, 2500);
      }
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Username must be at least 5 characters')
        .max(20, 'Username must be at most 20 characters')
        .required('username is required')
        .matches(
          /^[a-zA-Z0-9_]+$/,
          'Username can only contain letters, numbers, and underscores'
        ),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(/^\S*$/, 'Password cannot contain spaces')
        .test(
          'no-spaces',
          'Password cannot contain spaces',
          (value) => !/\s/.test(value)
        ),
    }),
    onSubmit: handleSignup,
  });

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
      <form
        className='flex flex-col items-center w-full'
        onSubmit={formik.handleSubmit}
      >
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.email && (
          <div className='text-red-600 text-xs'>{formik.errors.username}</div>
        )}
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='email_input'
          type='email'
          name='email'
          placeholder='Email address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='text-red-600  text-xs'>{formik.errors.email}</div>
        )}
        <CustomInputField
          className='p-2 text-xs lg:text-xl md:text-lg border-2 w-full rounded-lg'
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.email && (
          <div className='text-red-600 text-xs'>{formik.errors.password}</div>
        )}
        <div className={errorMessage ? 'text-red-600 text-xs' : 'hidden'}>
          {errorMessage}
        </div>
        <div className='flex justify-center p-2 w-full mt-1'>
          <button
            type='submit'
            className='p-3 my-2 rounded-2xl text-white text-xs lg:text-xl md:text-lg bg-blue-600 disabled:bg-gray-200'
            disabled={
              !formik.values.email ||
              !formik.values.username ||
              !formik.values.password ||
              Object.keys(formik.errors).length !== 0
            }
          >
            SIGN UP
          </button>
        </div>
        <div className='flex justify-center w-full text-blue-600 text-xs lg:text-base md:text-base'>
          <span className='text-black mr-2'>Already a user? </span>
          <Link to='/'>
            <u>Login</u>
          </Link>
        </div>
      </form>
    </div>
  );
};
