import './footer.css'
import facebook from '../../content/assets/social/facebook-white.svg'
import twitter from '../../content/assets/social/twitter-white.svg'
import insta from '../../content/assets/social/instagram-white.svg'
import apple from '../../content/assets/store/app-store.svg'
import play from '../../content/assets/store/play-store.svg'
import micro from '../../content/assets/store/windows-store.svg'


function Footer() {
    return (
        <div className='footer'>
            <div className='container__links'>
                <ul className='list'>
                    <li className='item__list item__list1'>Home</li>
                    <li className='item__list'>Terms and Conditions</li>
                    <li className='item__list'>Privacy policy</li>
                    <li className='item__list'>Collection Statement</li>
                    <li className='item__list'>Help</li>
                    <li className='item__list'>Manage Account</li>
                </ul>
            </div>
            <div className='container__copy'>
                <p className='copy'>Copyright @ 2016 DEMO Streaming. All Rights Reserved.</p>
            </div>
            <div className='social'>
                <div className='container__redes'>
                    <img className='redes ' src={facebook} alt="" />
                    <img className='redes' src={twitter} alt="" />
                    <img className='redes' src={insta} alt="" />
                </div>
                <div className='container__app'>
                    <img className='app app-apple' src={apple} alt="" />
                    <img className='app' src={play} alt="" />
                    <img className='app app-micro' src={micro} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer