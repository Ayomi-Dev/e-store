import React from 'react'

const EditProfile = ({ cancelEdit }) => {
  return (
    <section className="page">
        
        <div className="w-3/4 mx-auto">
            <form action="" className='mt-4 rounded-sm shadow-md py-4'>

                <div className="form-group">
                    <input required type="text" />
                    <label htmlFor="">First Name</label>
                </div>

                <div className="form-group">
                    <input required type="text" />
                    <label htmlFor="">Last Name</label>
                </div>

                <div className="form-group">
                    <input required type="email" />
                    <label htmlFor="">Email</label>
                </div>

                <div className="form-group">
                    <input required type="number" />
                    <label htmlFor="">Phone No.</label>
                </div>
                
                <div className="flex items-center gap-4 justify-center">
                    <button className='m-0'>Update Profile</button>

                    <button className='m-0 bg-gray-700' onClick={cancelEdit}>Cancel</button>
                </div>

            </form>
        </div>

    </section>
  )
}

export default EditProfile;