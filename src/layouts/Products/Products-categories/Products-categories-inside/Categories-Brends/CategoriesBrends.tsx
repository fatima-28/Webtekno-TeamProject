import React from 'react'
import './CategoriesBrends.scss'
import { BiReset } from 'react-icons/bi'
const CategoriesBrends = (props: any) => {
    const { setBrend } = props;
    const onRadioButtonHandler = ({ target }: any) => {
        setBrend(target.id);
    }
    return (
        <form className='formBrends'>
            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="samsung" className='radiobutton' />
                <label htmlFor="samsung">Samsung</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="apple" className='radiobutton' />
                <label htmlFor="apple">Apple</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="bosch" className='radiobutton' />
                <label htmlFor="bosch">Bosch</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="zimmer" className='radiobutton' />
                <label htmlFor="zimmer">Zimmer</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="braun" className='radiobutton' />
                <label htmlFor="braun">Braun</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="kenwood" className='radiobutton' />
                <label htmlFor="kenwood">Kenwood</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="vitek" className='radiobutton' />
                <label htmlFor="vitek">Vitek</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="gorenje" className='radiobutton' />
                <label htmlFor="gorenje">Gorenje</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="ninja" className='radiobutton' />
                <label htmlFor="ninja">Ninja</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="delonghi" className='radiobutton' />
                <label htmlFor="delonghi">Delonghi</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="philips" className='radiobutton' />
                <label htmlFor="philips">Philips</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="aux" className='radiobutton' />
                <label htmlFor="aux">AUX</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="polaris" className='radiobutton' />
                <label htmlFor="polaris">Polaris</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="hotpoint" className='radiobutton' />
                <label htmlFor="hotpoint">Hotpoint</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="lg" className='radiobutton' />
                <label htmlFor="lg">LG</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="sony" className='radiobutton' />
                <label htmlFor="sony">Sony</label>
            </div>

            <div className="choises">
                <input onClick={onRadioButtonHandler} type="radio" name="radiobutton" id="epson" className='radiobutton' />
                <label htmlFor="epson">EPSON</label>
            </div>

            <button className="reset" type='reset'>Sıfırla
                <BiReset color='white' size={25} /></button>
        </form>
    )
}

export default CategoriesBrends
