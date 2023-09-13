import assets from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100'>
      <div className="basis-4/12">
        <Image 
          src={assets.sideImage} 
          alt="side image" 
          className="h-screen w-full" 
          priority={true} />
      </div>
      <div className='basis-8/12'>
        <div className='p-6 md:p-10 max-w-lg shadow-2xl rounded-xl bg-slate-50 mx-auto'>
          <Image 
            src={assets.logoGmiDefault} 
            className="w-32 mx-auto" 
            alt="logo geomuda indonesia"/>
          <h2 className='text-2xl text-center my-5 font-semibold'>
            Register
          </h2>
          <form className='flex justify-center flex-col mx-auto'>
            <label className='mb-1'>
              Full Name
            </label>
            <input 
              type='text' 
              placeholder='Enter your full name' 
              className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3' 
              required/>
            <label className='mb-1'>
              Email
            </label>
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3' 
              required/>
            <label className='mb-1'>
              Password
            </label>
            <input 
              type='password' 
              placeholder='Enter your password' 
              className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3'
              required />
            <label className='mb-1'>
              Confirm Password
            </label>
            <input 
              type='password' 
              placeholder='Enter your password again' 
              className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3' 
              required />
            <button className='bg-[#7B2418] text-white rounded-xl p-2 mb-1'>
              Register
            </button>
          </form>
          <div className='text-center my-4'>
            <p className='text-sm'>
              Back to
              <span className='font-semibold'>
                <Link href='/login'>
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage