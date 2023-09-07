import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className='p-4 w-screen'>
      <div className='p-6 md:p-10 max-w-md shadow-2xl rounded-xl bg-slate-300 mx-auto'>
        <Image src={assets.logoGmi} className="w-32 mx-auto "/>
        <h2 className='text-2xl text-center my-5 font-semibold'>Login</h2>
        <form className='flex justify-center flex-col mx-auto'>
          <label className='mb-1'>Email</label>
          <input type='email' placeholder='Enter your email' className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3' required/>
          <label className='mb-1'>Password</label>
          <input type='password' placeholder='Enter your password' className='border-2 border-slate-300 rounded-xl p-2 mb-4 text-sm pl-3' required />
          <button className='bg-slate-900 text-white rounded-xl p-2 mb-4'>Login</button>
        </form>
        <div className='text-center my-5'>
          <p className='text-sm'>Don't have account? <span className='font-semibold'>
            <Link href='/register'>Register</Link>
            </span></p>
          <p className='text-sm'>Forgot password? <span className='font-semibold'>Reset</span></p>
        </div>
      </div>
    </div>
  )
}
;
export default LoginPage;