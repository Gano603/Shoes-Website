import { useRef, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Container5 = () => {

    const backgroundImageRef = useRef(null);
    const text_up1 = useRef(null);
    const text_up2 = useRef(null);
    const button_opacity = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    backgroundImageRef.current.style.backgroundImage = `url(${"src/assets/img/Screen_Shot_2021-12-01_at_12.15.25_PM_1512x.png"})`;
                    backgroundImageRef.current.style.opacity = 1;
                    backgroundImageRef.current.style.transform = `scale(1)`;
                    text_up1.current.style.transform = 'translate(0, 0)';
                    text_up2.current.style.transform = 'translate(0, 0)';
                    button_opacity.current.style.transition = 'opacity 1.5s ease 2.5s';
                    button_opacity.current.style.opacity = 1;
                }
            })
        })
        if (backgroundImageRef.current) {
            observer.observe(backgroundImageRef.current)
        }

        return () => observer.unobserve(backgroundImageRef.current)
    }, [])
    return (
        <div className="first-container" ref={backgroundImageRef} style={{"justifyContent":"flex-start"}}>
            <div className="poster-above-options" style={{"alignItems":"flex-start"}}>
                <div>
                    <p ref={text_up1} style={{"fontSize":"5rem"}}>CODDI Hats</p>
                </div>
                <div className="poster-above-options2" style={{"flexDirection":"row","alignItems":"center"}}>
                    <h3 ref={text_up2}>ALL-BLACK SNAPBACK TRUCKER</h3>
                    <button ref={button_opacity}>SHOP NOW <span><BsArrowRight /></span></button>
                </div>
            </div>
        </div>
    )
}

export default Container5