export const SignPage = () => {
  return (
    <div className='bg-blue-100 w-screen h-screen flex justify-center items-center'>
      <div className='bg-blue-500 rounded-3xl p-4 flex-col flex-grow fixed w-3/4 mx-auto h-3/4'>
        <div className='text-3xl w-full mx-auto text-center'>
          Welcome to messenger
        </div>
        <form>
          <div className='flex m-auto mt-5 w-1/2 h-fit'>
            <label htmlFor='email_input' className='bg-gray-500 p-2'>
              Email
            </label>
            <input
              className='w-full'
              id='email_input'
              type='email'
              placeholder='Enter your mail'
            />
          </div>
        </form>
      </div>
    </div>
  );
};
