function BackgroundThePlunge() {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-0 overflow-hidden">
            <img
                src="/backgrounds/theplunge-bg.png"
                alt="The Plunge Background"
                className="blur-[2px] brightness-40 w-full h-screen object-cover scale-105"
            />
            <p className="absolute bottom-3 left-3 text-white text-xl z-10 font-[pusab] text-left opacity-70">
                Dolabill - The Plunge
            </p>
        </div>
    );
}

export default BackgroundThePlunge;