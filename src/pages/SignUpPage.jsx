import React, { useContext, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Contexts } from '../context/ProductContext'
import { auth } from '../firebase';

const SignUpPage = () => {
    const { signUp } = useAuth();
    
    const { c } = useContext(Contexts)
    //set state for form input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =  useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userImage, setUserImage] = useState(null);
    const [phoneNo, setPhoneNo] = useState('');


    //creating state to toggle between revealing and hiding password
    const [passwordType, setPasswordType] = useState('password');

    const [confirmedPassword, setConfirmedPassword] = useState('password')

    const showPassword = (e) => {
        //toggling between password input field to reveal or hide password'
        setPasswordType(e.target.type = e.target.type === 'password' ? 'text' : 'password');
    }

    const showConfirmedPassword = (e) => {
        //toggling between password input field to reveal or hide password'
        setConfirmedPassword(e.target.type = e.target.type === 'password' ? 'text' : 'password')
    }

    //creating an object for password conditions
    const [passwordConditions, setPasswordConditions ] = useState({
        length: false,
        number: false,
        uppercase: false,
        lowercase: false,
        specialCase: false
    })
    const handlePasswordConditions = (e) => {
        const passwordValue = e.target.value;
        const lengthCondition = passwordValue.length >= 8;//checking if password length is greater than or equal to 8
        const lowercaseCondition = /[a-z]/.test(passwordValue);//checking if pasword value contains lowercase letter
        const upperCaseCondition = /[A-Z]/.test(passwordValue);//checking if pasword value contains uppercase letter
        const numberCondition = /\d/.test(passwordValue); //checking if pasword value contains a number
        const specialCaseCondition = /[!@#$%^&.*]/.test(passwordValue);//checking if pasword value contains a special xter
        


        setPasswordConditions({
            length: lengthCondition,
            number: numberCondition,
            uppercase: upperCaseCondition,
            lowercase: lowercaseCondition,
            specialCase: specialCaseCondition
        });
    }

    const [loading, setLoading] = useState(false)
    
    const handleSignUp = async (e) => {
        e.preventDefault();

        setLoading(true)
         
        try {
            const userCredential = await signUp(auth,
                {
                email, 
                password, 
                displayName: firstName,
                phoneNo,
                lastName,
                confirmPassword,
                userImage})
            const user = userCredential.user
            c(user)
        } 
        catch (error) {
           console.log(error.message) 
        }

        

        c(firstName, lastName, email, password)

    }




  return (
    <section className="page">
        
        <div className="w-full md:w-4/5 mx-auto">
            <form action="" onSubmit={ handleSignUp } className='mt-4 rounded-sm shadow-md py-4'>
                <div className="form-group">
                    <input type="file" className='hidden' id='file-input' onChange={(e) => {setUserImage(e.target.files[0])}}  />
                    <div className="mx-auto flex justify-center w-full my-4 relative" >
                        <img src={userImage ? URL.createObjectURL(userImage) : ''} className='w-32 h-32 rounded-full border-white border-8 shadow-md' alt="" />
                        <div className="imgSelect absolute bottom-0" onClick={() => {document.getElementById('file-input').click(); console.log(userImage)}}>
                            <i className="fa fa-camera ml-6 z-20 text-gray-500"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <i className="fa fa-user"></i>
                    <input  type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}  />
                    <label htmlFor="">First Name</label>
                </div>

                <div className="form-group">
                    <i className="fa fa-user"></i>
                    <input  type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    <label htmlFor="">Last Name</label>
                </div>

                <div className="form-group">
                    <i className="fa fa-envelope"></i>
                    <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="">Email</label>
                </div>

                <div className="form-group">
                    <i className="fa fa-phone"></i>
                    <input  type="number"  />
                    <label htmlFor="">Phone No.</label>
                </div>

                <div className="form-group">
                    <i className="fa fa-lock"></i>
                    <input required type={ passwordType } onChange={(e) => {setPassword(e.target.value);  }} value={password}  />
                    <label htmlFor="">Password</label>
                    <div className="absolute right-10 mb-3">
                        <i className={`fa fa-eye${passwordType === 'password' ? '' :'-slash'} left-0`} onClick={ showPassword }></i>
                    </div>
                </div>

                <div className="form-group">
                    <i className="fa fa-lock"></i>
                    <input  type={ confirmedPassword } />
                    <label htmlFor="">Confirm Password</label>
                    <div className="absolute right-10 mb-3">
                        <i className={`fa fa-eye${confirmedPassword === 'password' ? '' :'-slash'} left-0`} onClick={ showConfirmedPassword }></i>
                    </div>
                </div>

                <div className="block ml-5 mb-4">
                    <h1 className='text-sm text-gray-500'>Password should contain:</h1>

                    <ul className='checks'>
                        <li>
                            <i className={`${passwordConditions.length ? "fa fa-check text-green-400" : "fa fa-circle text-gray-300"}`}></i>
                            <span className={`${passwordConditions.length ? "text-green-400" : "text-gray-300"}`}>At least 8 characters in length</span>
                        </li>
                        <li>
                            <i className={` ${passwordConditions.number ? "fa fa-check text-green-400" : "fa fa-circle text-gray-300"}`}></i>
                            <span className={`${passwordConditions.number ? "text-green-400" : "text-gray-300"}`}>At least a number</span>
                        </li>
                        <li>
                            <i className={`${passwordConditions.lowercase ? "fa fa-check text-green-400" : "fa fa-circle text-gray-300"}`}></i>
                            <span className={`${passwordConditions.lowercase ? "text-green-400" : "text-gray-300"}`}>At least a lowercase letter</span>
                        </li>
                        <li>
                            <i className={`${passwordConditions.uppercase ? "fa fa-check text-green-400" : "fa fa-circle text-gray-300"}`}></i>
                            <span className={`${passwordConditions.uppercase ? "text-green-400" : "text-gray-300"}`}>At least an uppercase letter</span>
                        </li>
                        <li>
                            <i className={`${passwordConditions.specialCase ? "fa fa-check text-green-400" : "fa fa-circle text-gray-300"}`}></i>
                            <span className={`${passwordConditions.specialCase ? "text-green-400" : "text-gray-300"}`}>At least a special symbol</span>
                        </li>
                    </ul>
                </div>
                
                <div className="flex items-center justify-center">
                    <button className='m-0'>Sign up</button>

                    <p className='ml-4 text-sm hover:text-pink-500 duration-75 cursor-pointer'>Already have an account?</p>
                </div>

            </form>
        </div>

    </section>
  )
}

export default SignUpPage