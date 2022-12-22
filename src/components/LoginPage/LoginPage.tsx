import React, { FC, useState } from 'react'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import './LoginPage.scss'
import { ForgotPassword } from '../ForgotPassword/ForgotPassword'

type loginPagePropsType = { displayValue: string }
export const LoginPage: FC<loginPagePropsType> = ({ displayValue }) => {

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordPage, setShowPasswordPage] = useState(false)

    function showHide() {
        setShowPassword(!showPassword)
        let x: any = document.getElementById("password")
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    function showPasswordPageFunction() {
        setShowPasswordPage(!showPasswordPage)
    }
    return (

        showPasswordPage ? <ForgotPassword /> :

            <div className="innerLoginPopupPage" style={{ display: displayValue }}>
                <h1 className='loginPopuptext'>Login Form</h1>

                <div className="textBox">
                    <label htmlFor="emailOrPhone">Email or Phone</label>
                    <input type="text" name="" id="emailOrPhone" />
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="totalPasswordPlace">
                        <input type="password" name="" id="password" />
                        <button className='showHidePassword' onClick={showHide}>{showPassword ? <BiShowAlt size={30} /> : <BiHide size={30} />}</button>
                    </div>
                    <button className='forgotPasswordButton' onClick={showPasswordPageFunction}>Forgot Password?</button>
                </div>

                <button className="submitButton">LOGIN</button>
            </div >
    )
}
