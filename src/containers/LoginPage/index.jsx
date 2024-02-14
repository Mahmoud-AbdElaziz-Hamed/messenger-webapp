import { CustomInputField } from '../../components/CustomInputField';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useFormik } from 'formik/dist/formik.esm';
import * as Yup from 'yup';
import { usersMock } from '../../utils/users';

export const LoginPage = () => {
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

  const handleLogin = (loginUser) => {
    console.log(loginUser);
    const user = usersMock.find(
      (user) =>
        user.email === loginUser.email && user.password === loginUser.password
    );
    console.log(user);
    if (user) {
      navigate('/chat');
    } else {
      console.log('Invalid email or password');
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
          <Link to='/'>i don&apos;t have account</Link>
        </div>
      </form>
    </div>
  );
};
