import './Login.scss'

import { FiUserPlus } from 'react-icons/fi'
import { useState } from 'react'

import { SignUpPopupPage } from '../SignUpPopupPage/SignUpPopupPage'
import { LoginPage } from '../LoginPage/LoginPage'
import { GrClose } from 'react-icons/gr'
export const Login = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(true)

    function showLoginFunction() {
        setShowLogin(!showLogin)
        console.log("true");
        
    }

    function showSignUpFunction() {
        setShowSignUp(!showSignUp)
    }

    console.log(showLogin);

    showLogin ? console.log("true") : console.log("false");

    return (
        <div className="login">
            <button className='loginButton' onClick={showLoginFunction}><FiUserPlus className='usericon' size={30} /></button>

            <div className={showLogin ? "loginPopup loginPopupShow" : "loginPopup"} >
                <div className="innerLoginPopup">

                    <div className="innerLoginPopupTop">

                        <div className="linksInLoginPopup">
                            <button className='linkButton signUpPoupButton' onClick={showSignUpFunction}>SignUp now</button>
                        </div>

                        <button className='closeButtonInLogin' onClick={showLoginFunction}><GrClose color='black' size={20} className='closeButtonIconInLoginInner' /></button>
                    </div>

                    <div className="innerLoginPopupBottom">
                        {showSignUp ? <SignUpPopupPage displayValue={'flex'} /> : <LoginPage displayValue={'flex'} />}
                    </div>

                </div>
            </div>
        </div>
    )
}
