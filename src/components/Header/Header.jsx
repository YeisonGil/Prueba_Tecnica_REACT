import './header.css'


function Header() {
  return (
    <div className='main'>
        <div className='container__title'>
            <h1 className='title'>DEMO Streaming</h1>
        </div>
        <div className='container__buttons'>
            <button className='button button1'>Log in</button>
            <button className='button button2'>Start you free trial</button>
        </div>
    </div>
  )
}

export default Header