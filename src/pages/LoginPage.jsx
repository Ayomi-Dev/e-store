import React from 'react'

const LoginPage = () => {
  return (
    <section className="page">
        
        <div className="w-3/4 mx-auto">
            <form action="" className='mt-4 rounded-sm shadow-md py-4'>

                <div className="form-group">
                    <input required type="email" />
                    <label htmlFor="">Email</label>
                </div>

                <div className="form-group">
                    <input required type="password" />
                    <label htmlFor="">Password</label>
                </div>

                <div className="flex items-center justify-center">
                    <button className='m-0'>Login</button>

                    <p className='ml-4 text-sm hover:text-pink-500 duration-75 cursor-pointer'>Dont't have an account?</p>
                </div>

            </form>
        </div>

    </section>
  )
}

export default LoginPage