import { FC, useState } from 'react'
import './SignUpPopupPage.scss'

type signUpPropsType = { displayValue: string }
export const SignUpPopupPage: FC<signUpPropsType> = ({ displayValue }) => {

    const [isDisable, setIsDisable] = useState(true)

    function disableButtonFunction() {
        setIsDisable(!isDisable)
    }

    return (
        <>
            <div className="innerSignUpPopup" style={{ display: displayValue }}>

                <h2 className='innerSignUpPopupHeaderText'>Sign Up</h2>

                <div className="inputPartInSignUp">

                    <input type="text" className='inputInSignUp' id='inputInSignUp1' placeholder='Name' minLength={3} required />

                    <input type="text" name="" id="inputInSignUp2" className='inputInSignUp' placeholder='LastName' />

                    <input type="email" name="" id="inputInSignUp3" className='inputInSignUp' placeholder='Email' />

                    <input type="password" name="" id="inputInSignUp4" className='inputInSignUp' placeholder='Password' />

                </div>

                <div className="signUpCheckBoxPart">
                    <input type="checkbox" name="" id="checkBoxSignUp" onClick={disableButtonFunction} />
                    <label htmlFor='checkBoxSignUp' className='checkBoxSignUpAgreementText'> I agree to the terms & conditions</label>
                </div>

                <button type='submit' className="signUpButton" disabled={isDisable} >LET'S GO</button>
            </div>
        </>
    )
}
