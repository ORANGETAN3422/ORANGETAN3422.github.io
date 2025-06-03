import './header.css';

function Header() {
    return (
        <header>
            <div className='top-part'>
                <h1>ORANGETAN</h1>
                <img className='gd-icon' src={`${import.meta.env.BASE_URL}cube_23.png`} alt='orang' />
            </div>
            <a href='https://www.youtube.com/@orangetangd'>
                <img className='link-img' src={`${import.meta.env.BASE_URL}icons/youtube.svg`} alt='yt' />
            </a>
            <br />
            <br />
        </header>
    );
}

export default Header;