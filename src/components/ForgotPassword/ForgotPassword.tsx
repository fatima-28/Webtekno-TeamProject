import './ForgotPassword.scss'


export const ForgotPassword = () => {
    return (
        <div className='forgotPasswordPage'>
            <h1 className="forgotPasswordText">Change Password</h1>
            <div className="inputsInForgotPagesPart">
                <input className='inputsInForgotPages' type="text" placeholder='Phone number, username, or email' />
                <input className='inputsInForgotPages' type="password" placeholder='Password' />
                <button className="sendToChangePasswordButton">Change</button>
            </div>
        </div>
    )
}
