import './background.css'

function Background() {
    return (
        <video className='videoTag' autoPlay loop muted>
            <source src={`${import.meta.env.BASE_URL}portfolio-bg.mp4`} type='video/mp4' />
        </video>
    );
}

export default Background;